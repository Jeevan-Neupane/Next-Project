import Link from "next/link";

function Links() {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div>
      {links.map((item) => {
        return (
          <Link
            key={item.path}
            href={item.path}
          >
            {" "}
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Links;
