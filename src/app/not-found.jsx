import React from "react";
import Link from "next/link";
function NotFound() {
  return (
    <div>
      <h1>Page Does not exist </h1>
      <Link href='/'>Return To Home</Link>
    </div>
  );
}

export default NotFound;
