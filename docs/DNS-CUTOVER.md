# freytech.org DNS cutover (recorded 2026-10-01)

**Current facts (dig, 2026-10-01):** registrar Bluehost (status clientTransferProhibited, i.e. transfer-locked);
nameservers ns1/ns2.hostmonster.com (Bluehost); web A record 64.141.147.182 (old Joomla host);
**email is Microsoft 365** (MX → freytech-org.mail.protection.outlook.com). Email is not hosted at Bluehost,
so moving the website cannot touch mailboxes. It can only break mail if the DNS records below are lost.

## Safest path (recommended): change only the web records, keep nameservers where they are
In the Bluehost/HostMonster DNS zone for freytech.org:
| Record | Change |
|---|---|
| `A  @  64.141.147.182` | → `A  @  147.79.72.229` (Hostinger; confirm the IP shown in hPanel for the site) |
| `A  www  64.141.147.182` (or CNAME → freytech.org) | → point at the same Hostinger IP, or CNAME `www` → `freytech.org` |
Leave every other record untouched. Then in hPanel set the site's domain to freytech.org and enable SSL once the A record resolves. Email is never interrupted. A registrar transfer to Hostinger (if wanted) can follow later and does not change DNS by itself; but see the note below.

## If nameservers are moved to Hostinger (or the Bluehost account is closed)
Bluehost's DNS zone disappears with the account. Recreate **all** of these in Hostinger's DNS zone *before* switching nameservers or cancelling Bluehost, then verify with `dig` from outside:

| Type | Host | Value | Purpose |
|---|---|---|---|
| MX | @ | `freytech-org.mail.protection.outlook.com` priority 0 | Microsoft 365 inbound mail |
| TXT | @ | `v=spf1 mx include:spf.protection.outlook.com include:spf-us.emailsignatures365.com ip4:3.214.204.181 ip4:44.211.178.112/28 ip4:3.101.216.144/28 ~all` | SPF (M365 + Email Signatures 365 + three sending IPs) |
| TXT | @ | `MS=ms59504437` | Microsoft domain verification |
| CNAME | autodiscover | `autodiscover.outlook.com` | Outlook client setup |
| CNAME | selector1._domainkey | `selector1-freytech-org._domainkey.freytech.onmicrosoft.com` | DKIM |
| CNAME | selector2._domainkey | `selector2-freytech-org._domainkey.freytech.onmicrosoft.com` | DKIM |
| CNAME | enterpriseregistration | `enterpriseregistration.windows.net` | Intune / Entra device registration |
| CNAME | enterpriseenrollment | `enterpriseenrollment.manage.microsoft.com` | Intune enrollment |
| CNAME | sip | `sipdir.online.lync.com` | Teams/Skype (legacy) |
| CNAME | lyncdiscover | `webdir.online.lync.com` | Teams/Skype (legacy) |
| SRV | _sip._tls | 100 1 443 `sipdir.online.lync.com` | Teams/Skype (legacy) |
| SRV | _sipfederationtls._tcp | 100 1 5061 `sipfed.online.lync.com` | Teams/Skype federation |
| CNAME | mail | `ghs.google.com` | Legacy Google record; likely dead, harmless to keep or drop |
| A | webmail / cpanel | 67.20.76.205 | Old Bluehost cPanel; drop once Bluehost is retired |
| A | ftp | 65.36.162.210 | Old host FTP; drop once retired |
| A | @ and www | Hostinger IP (147.79.72.229 at time of writing; confirm in hPanel) | The new website |

No DMARC record exists today (`_dmarc.freytech.org` empty). Optional improvement after cutover:
`TXT _dmarc "v=DMARC1; p=none; rua=mailto:info@freytech.org"`.

## Verification after the change
```
dig +short A freytech.org            # Hostinger IP
dig +short MX freytech.org           # still freytech-org.mail.protection.outlook.com
dig +short TXT freytech.org          # SPF + MS= still present
dig +short CNAME autodiscover.freytech.org selector1._domainkey.freytech.org
curl -sI https://freytech.org/ | head -3
curl -sI http://freytech.org/service-and-support | grep -i location   # → /service-support/
```
Send a test email to and from angelo@freytech.org after the change.
