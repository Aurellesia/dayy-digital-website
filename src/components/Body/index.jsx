import "../../styles/styles.scss";
import logo1 from "../../assets/images/logoipsum-211.png";
import logo2 from "../../assets/images/logoipsum-213.png";
import logo3 from "../../assets/images/logoipsum-216.png";
import logo4 from "../../assets/images/logoipsum-217.png";
import logo5 from "../../assets/images/logoipsum-218.png";
import ad_icon from "../../assets/images/ad-yellow.png";
import landing_page_icon from "../../assets/images/landing-page-yellow.png";
import marketplace_icon from "../../assets/images/marketplace-yellow.png";
import meta_icon from "../../assets/images/meta-yellow.png";
import meta_cpas_icon from "../../assets/images/meta-cpas-yellow.png";
import tiktok_icon from "../../assets/images/tiktok-yellow.png";
import picture_one from "../../assets/images/body-picture-one-logo.png";
import checklist from "../../assets/images/check-yellow.png";
import testimoni from "../../assets/images/testimoni.png";
import blue_checklist from "../../assets/images/check-blue.png";

// Gambar portfolio
import meta_ads_reg_1 from "../../assets/portfolio/meta_ads_reguler_1.png";
import meta_ads_reg_2 from "../../assets/portfolio/meta_ads_reguler_2.png";
import meta_ads_cpas_1 from "../../assets/portfolio/meta_ads_cpas_1.png";
import meta_ads_cpas_2 from "../../assets/portfolio/meta_ads_cpas_2.png";
import marketplace_ads_1 from "../../assets/portfolio/marketplace_ads_1.png";
import marketplace_ads_2 from "../../assets/portfolio/marketplace_ads_2.png";


const Body = () => {
  return (
    <>
      <div className="body">
        <div className="logos">
          <img className="logo1" src={logo1} alt="logo1" />
          <img className="logo2" src={logo2} alt="logo2" />
          <img className="logo3" src={logo3} alt="logo3" />
          <img className="logo4" src={logo4} alt="logo4" />
          <img className="logo5" src={logo5} alt="logo5" />
        </div>
        <div className="part-one-wrapper">
          <span className="side-title-text">
            We serve various digital marketing services
          </span>
          <span className="side-content-text long-text">
            Are you ready to maximize your brand's impact? At Dayy Digital
            agency, we’re not just an advertising agency – we’re your partners
            in growth. Specializing in Marketplace Ads, Meta, and TikTok. we
            deliver strategies that work for your brand !
          </span>
        </div>
        <div className="part-two-wrapper">
          <div className="box">
            <img className="service-icon" src={ad_icon} alt="ad_icon" />
            <div className="content-box">
              <span className="box-title">Ads Strategy Consultation</span>
              <span className="long-text">
                Unlock Growth with Expert Ads Consultation—strategic insights
                that elevate your brand's reach!
              </span>
            </div>
          </div>

          <div className="box">
            <img className="service-icon" src={meta_icon} alt="meta_icon" />
            <div className="content-box">
              <span className="box-title">Meta Ads Management</span>
              <span className="long-text">
                Boost Your Sales Brand with Targeted Meta Ads—Expert Management
                for Maximum Impact!
              </span>
            </div>
          </div>

          <div className="box">
            <img className="service-icon" src={tiktok_icon} alt="tiktok_icon" />
            <div className="content-box">
              <span className="box-title">Tiktok Ads Management</span>
              <span className="long-text">
                Reach and Engage Audiences with Expert TikTok Ads
                Management—Boost Your Brand's Impact!
              </span>
            </div>
          </div>
        </div>
        <div className="part-two-wrapper">
          <div className="box">
            <img
              className="service-icon"
              src={meta_cpas_icon}
              alt="meta_cpas_icon"
            />
            <div className="content-box">
              <span className="box-title">Meta CPAS Management</span>
              <span className="long-text">
                Drive Sales with Meta CPAS like Tokopedia,Shopee, etc —Seamless
                Collaboration, Optimized Results!
              </span>
            </div>
          </div>
          <div className="box">
            <img
              className="service-icon"
              src={marketplace_icon}
              alt="marketplace_icon"
            />
            <div className="content-box">
              <span className="box-title">Marketplace Ads Management</span>
              <span className="long-text">
                Maximize Sales with Expert Marketplace Ads Management— Product
                Keyword ads and Shop ads
              </span>
            </div>
          </div>
          <div className="box">
            <img
              className="service-icon"
              src={landing_page_icon}
              alt="landing_page_icon"
            />
            <div className="content-box">
              <span className="box-title">Landing Page Development</span>
              <span className="long-text">
                Convert Visitors into Customers with High-Impact Landing Page
                Development—Optimize for Results!
              </span>
            </div>
          </div>
        </div>
        <div className="part-three-wrapper">
          <div className="part-three-side-text">
            <span className="part-three-side-title-text">
              Elevate your digital brand from zero to hero.
            </span>
            <div className="checklist-wrapper">
              <img className="checklist-icon" src={checklist} alt="checklist" />
              <span className="side-content-text long-text">
                Affordable Advertising Solutions—Boost Your Brand Without
                worried about budget.
              </span>
            </div>

            <div className="checklist-wrapper">
              <img className="checklist-icon" src={checklist} alt="checklist" />
              <span className="side-content-text long-text">
                Proven Strategies for Maximum Impact and Sales for your Brand
              </span>
            </div>
            <div className="checklist-wrapper">
              <img className="checklist-icon" src={checklist} alt="checklist" />
              <span className="side-content-text long-text">
                Experienced Advertisers at Your Service—Achieve More with Our
                Skilled Team!
              </span>
            </div>
            <div className="checklist-wrapper">
              <button className="button-get-started">Get Started</button>
            </div>
          </div>
          <img
            className="body-picture-one"
            src={picture_one}
            alt="picture_one"
          />
        </div>

        <span className="portfolio-title-text">Our Portfolio</span><br/>
        
        <span className="portfolio-subtitle-text">Meta Ads Reguler</span>
        <div className="part-three-wrapper portfolio-wrapper">
          <img
            className="portfolio-pict-one"
            src={meta_ads_reg_1}
            alt="meta_ads_reg_1"
          />
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
        </div>

        <div className="part-three-wrapper portfolio-wrapper">
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
          <img
            className="portfolio-pict-one"
            src={meta_ads_reg_2}
            alt="meta_ads_reg_2"
          />
        </div>

        <span className="portfolio-subtitle-text">Meta Ads CPAS</span>
        <div className="part-three-wrapper portfolio-wrapper">
          <img
            className="portfolio-pict-one"
            src={meta_ads_cpas_1}
            alt="meta_ads_cpas_1"
          />
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
        </div>

        <div className="part-three-wrapper portfolio-wrapper">
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
          <img
            className="portfolio-pict-one"
            src={meta_ads_cpas_2}
            alt="meta_ads_cpas_2"
          />
        </div>

        <span className="portfolio-subtitle-text">Tiktok Ads</span>
        <div className="part-three-wrapper portfolio-wrapper">
          <img
            className="portfolio-pict-one"
            src={meta_ads_cpas_1}
            alt="meta_ads_cpas_1"
          />
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
        </div>

        <div className="part-three-wrapper portfolio-wrapper">
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
          <img
            className="portfolio-pict-one"
            src={meta_ads_cpas_2}
            alt="meta_ads_cpas_2"
          />
        </div>

        <span className="portfolio-subtitle-text">Marketplace Ads</span>
        <div className="part-three-wrapper portfolio-wrapper">
          <img
            className="portfolio-pict-one"
            src={marketplace_ads_1}
            alt="marketplace_ads_1"
          />
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
        </div>

        <div className="part-three-wrapper portfolio-wrapper">
          <div className="part-three-side-text">
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>

            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
            <div className="checklist-wrapper">
              <img
                className="checklist-icon"
                src={blue_checklist}
                alt="blue_checklist"
              />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </span>
            </div>
          </div>
          <img
            className="portfolio-pict-one"
            src={marketplace_ads_2}
            alt="marketplace_ads_2"
          />
        </div>

        <div className="part-four-wrapper">
          <div className="part-four-picture">
            <img
              className="body-picture-two"
              src={testimoni}
              alt="testimoni_pict"
            />
          </div>
          <div className="testimonial-text">
            <span className="testimonial-statement long-text">
              Welcome to Dayy Digital ! We’re excited to partner with you on
              your digital journey. Let’s elevate your brand together with our
              expert advertising solutions tailored to your needs! Let us
              elevate your brand with innovative strategies and expert
              management!
            </span>
            <br />
            <br />
            <span className="testimonial-name">Aurellesia Warsito</span>
            <br />
            <span className="testimonial-company long-text">
              CEO Dayy Digital
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
