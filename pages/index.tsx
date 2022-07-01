import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/index.module.scss"
import Image from "next/image";
import Link from "next/link";
import {FormattedMessage} from "react-intl";

const Home: NextPage = () => {
  return (
      <div>
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
                            <button className={styles.navigation__list_button}>
                                <FormattedMessage
                                    id="navigation_button_contact"
                                />
                            </button>

                            <button className={styles.navigation__list_button}>
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
            <main>

            </main>
          <footer className={styles.footer}>
              <div className={styles.container}>
                  <div className={styles.footer__title}>
                          <div className={styles.footer__title_list}>
                              <div className={styles.footer__title_firstColumn}>
                                  <div>
                                      <Image
                                          src="/../public/logo.png"
                                          alt="logo"
                                          width={108}
                                          height={24}
                                      />
                                  </div>
                                  <div>
                                      <p>
                                          <FormattedMessage id="footers_title_text"/>
                                      </p>
                                  </div>
                              </div>
                              <div className={styles.footer__title_secondColumn}>
                                  <div>
                                      <h6><FormattedMessage id="footers_list_oplossingen"/></h6>
                                      <ul>
                                          <li>
                                              <FormattedMessage id="footers_list_orders"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_producten"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_wms"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_order_picket"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_klanten"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_automation"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_data_analytics"/>
                                          </li>
                                      </ul>
                                  </div>
                                  <div>
                                      <h6><FormattedMessage id="footers_list_apps"/></h6>
                                      <ul>
                                          <li>
                                              <FormattedMessage id="footers_list_webshop"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_pos_systeem"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_store_screens"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_quiq"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_spooler"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_instant_search"/>
                                          </li>
                                      </ul>
                                  </div>
                                  <div>
                                      <h6><FormattedMessage id="footers_list_about_afosto"/></h6>
                                      <ul>
                                          <li>
                                              <FormattedMessage id="footers_list_klanten"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_vacatures"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_blog"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_contact"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_documentatie"/>
                                          </li>
                                          <li>
                                              <FormattedMessage id="footers_list_partners"/>
                                          </li>
                                      </ul>
                                  </div>
                                  <div>
                                  <h6><FormattedMessage id="footers_list_developers"/></h6>
                                  <ul>
                                      <li>
                                          <FormattedMessage id="footers_list_integrations"/>
                                      </li>
                                      <li>
                                          <FormattedMessage id="footers_list_api_documentatie"/>
                                      </li>
                                      <li>
                                          <FormattedMessage id="footers_list_performance" />
                                      </li>
                                      <li>
                                          <FormattedMessage id="footers_list_platform_status" />
                                      </li>
                                  </ul>
                              </div>
                              </div>
                          </div>
                  </div>
              </div>
              <div className={styles.footer__container}>
                      <div className={styles.container}>
                          <div className={styles.footer__container_grid}>
                              <div className={styles.footer__container_first_column}>
                                  © 2022 Afosto. All rights reserved.
                              </div>
                              <div className={styles.footer__container_second_column}>
                                  <div>Terms and conditions</div>
                                  <div className={styles.footer__container_second_column_policy}>Privacy policy</div>
                              </div>
                          </div>
                      </div>
                  </div>
          </footer>
      </div>
  )
}

export default Home
