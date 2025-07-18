import styles from "./page.module.css";
import ClientComponent from "@/componets/client-component";
import ServerComponent from "@/componets/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
