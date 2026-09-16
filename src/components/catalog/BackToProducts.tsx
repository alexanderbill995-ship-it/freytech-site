"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

/** Returns to the product library, restoring the visitor's last filters (kept in sessionStorage by the library). */
export function BackToProducts({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <Link
      href="/products/"
      className={className}
      onClick={(e) => {
        try {
          const qs = sessionStorage.getItem("ft_product_filters");
          if (qs) { e.preventDefault(); router.push(`/products/?${qs}`); }
        } catch { /* fall through to plain link */ }
      }}
    >← Back to all products</Link>
  );
}
