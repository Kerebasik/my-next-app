import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/index.module.scss"
import Image from "next/image";
import Link from "next/link";
import {FormattedMessage} from "react-intl";

const Home: NextPage = () => {
  return (
      <>
          <Head>
              <title>Afosto</title>
          </Head>
          <div className={styles.topContainer}>
            <div className={styles.container}>
                <header>
                    <nav className={styles.navigation}>
                        <div>
                            <Image
                                src="/../public/logo.png"
                                alt="logo"
                                width={108}
                                height={24}
                            />
                        </div>
                        <div>
                            <ul className={styles.navigation__list}>
                                <li className={styles.navigation__list_link}>
                                    <Link href={"/"}>
                                        <FormattedMessage id="navigation_list_link_oplossingen"/>
                                    </Link>
                                </li>
                                <li className={styles.navigation__list_link}>
                                    <Link href={"/"}>
                                        <FormattedMessage id="navigation_list_link_apps"/>
                                    </Link>
                                </li>
                                <li className={styles.navigation__list_link}>
                                    <Link href={"/"}>
                                        <FormattedMessage id="navigation_list_link_over_afosto"/>
                                    </Link>
                                </li>
                                <li className={styles.navigation__list_link}>
                                    <Link href={"/"}>
                                        <FormattedMessage id="navigation_list_link_developers"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button>
                                <FormattedMessage
                                    id="navigation_button_contact"
                                />
                            </button>

                            <button>
                                <FormattedMessage
                                    id="navigation_button_started"
                                />
                            </button>
                        </div>
                    </nav>
                </header>
                <div>
                    <h1>
                        Manage your retail business from one place
                    </h1>
                   <h3>
                       Connect online and offline income streams through our omnichannel order management system.
                   </h3>
                </div>

            </div>
          </div>
          <footer className={styles.footer}>
              <div className={styles.container}>
                  <div className={styles.footer__container}>
                      <div className={styles.footer__container_first_column}>
                          © 2022 Afosto. All rights reserved.
                      </div>
                      <div className={styles.footer__container_second_column}>
                          <div>Terms and conditions</div>
                          <div className={styles.footer__container_second_column_policy}>Privacy policy</div>
                      </div>
                  </div>
              </div>
          </footer>
      </>
  )
}

export default Home
