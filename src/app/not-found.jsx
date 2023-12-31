import React from "react";
import Link from "next/link";
function NotFound() {
  return (
    <div>
      <h1>Page Doesn't exist </h1>
      <Link href='/'>Return To Home</Link>
    </div>
  );
}

export default NotFound;
