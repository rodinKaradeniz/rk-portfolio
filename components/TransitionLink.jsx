"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(500);

    router.push(href);

    await sleep(500);

    body?.classList.remove("page-transition");
  };
  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
