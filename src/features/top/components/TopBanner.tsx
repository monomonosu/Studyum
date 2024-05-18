import Link from "next/link";
import { BasicButton } from "@/components/Buttons/BasicButton";
import style from "@/styles/features/top/components/top_banner.module.scss";

export default function TopBanner() {
  return (
    <>
      <div className={style.banner_container}>
        <div className={style.banner_inner}>
          <p>
            Studyumは学ぶ人同士を繋ぐプラットフォームです。
            <br />
            気軽にもくもく会を開いてみましょう。
          </p>
          <div className={style.custom_wrapper}>
            <Link className={style.custom_link} href="/info">
              <BasicButton
                text="Studyumについて"
                color="success"
                variant="contained"
                className="-shadow"
              />
            </Link>
            <Link className={style.custom_link} href="/info/howto">
              <BasicButton
                text="Studyumの使い方"
                color="success"
                variant="contained"
                className="-shadow"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
