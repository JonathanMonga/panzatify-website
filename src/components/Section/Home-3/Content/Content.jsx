const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-v3-thumb">
              <img src="/images/v3/thumb-v3-2.png" alt="" />
              <div className="zubuz-v3-card">
                <img src="/images/v3/card-v3-4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="zubuz-default-content m-left">
              <h2>Why Panzatify?</h2>
              <p>
                Companies often need to bring their products or services to
                market quickly. Our SaaS applications are readily available and
                reducing development and deployment time.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <img src="/images/v3/icon11.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Increased Engagement:</span>
                    <p>
                    Enhance customer interaction and boost engagement with the WhatsApp Business API platform. Connect with your audience in real-time, provide personalized support, and streamline communication to drive sales and build lasting relationships.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <img src="/images/v3/icon10.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Higher Conversion Rates:</span>
                    <p>
                    With features such as automated messages, chatbots, and analytics, 
                    you can easily track and optimize your interactions to drive more 
                    sales and build stronger relationships with your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
