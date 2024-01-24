import { Suspense } from "react";
import styles from "./admin.module.css";

import AdminUsers from "@/components/adminUser/AdminUser";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPost/AdminPost";
import { auth } from "@/utils/auth";
import { findUser, getUser } from "@/utils/actions";
import { redirect } from "next/navigation";
const AdminPage = async () => {
  const session = await auth();
  console.log("session", session);
  let admin;
  if (session?.user?.email) {
    admin = await findUser(session?.user?.email);
  } else {
    admin = await getUser(session.user.id);
  }

  const id = admin[0]?._id.toString();
  console.log(admin);
  if (!admin[0]?.isAdmin) {
    redirect("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
