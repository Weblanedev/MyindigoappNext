import LetteredHeading from "@/components/letteredHeading/LetteredHeading";
import NumberedHeading from "@/components/numberedHeading/NumberedHeading";
import React, { useEffect } from "react";

const MainContent = ({ setActiveLink }: { setActiveLink: (item: string)=>void }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") || '';
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scrollend", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col gap-[72px]">
      <div>
        <h1 className=" text-[56px] font-semibold leading-[44px] text-paragraph">
          Privacy policy
        </h1>
      </div>
      <div className=" flex flex-col gap-10">
        <section id="general" className=" flex flex-col gap-6">
          <NumberedHeading no={"1"} title={"General Information"} />
          <p className=" privacytext">
            This data privacy, protection and cookie policy (“Privacy Notice”)
            describes your privacy rights regarding how Indigo and its Affiliates
            (“Indigo”, “we”, “us”) collect, process, use, store, and share your
            personal data when you use our website and all related sites,
            applications, and services.
          </p>
          <p className=" privacytext">
            This Notice is to inform you about the personal data we collect from
            you, how we collect the data and how we use the data, your rights
            relating to the Personal Data when You use this Service or purchase
            the Products and Services offered on the Application. By continuing
            to use our Application, You acknowledge that You have reviewed the
            Privacy Notice and agree to its terms. This also means that You have
            consented to the use of Your Personal Data and have accepted the
            applicable disclosures. You may, however, reach out to us if you
            have any questions regarding your data with us, via:
            support@Indigo.com
          </p>
          <p className=" privacytext">
            We always ensure to handle personal data in our care in strict
            compliance with applicable data privacy and protection laws.
          </p>
        </section>

        <section id="how" className=" flex flex-col gap-6">
          <NumberedHeading no={"2"} title={"How we collect personal data"} />

          <p className="privacytext">
            We collect your personal data when you register to use any of our
            services.
          </p>
        </section>
        <section id="collect" className=" flex flex-col gap-6">
          <NumberedHeading no={"3"} title={"The Information We Collect"} />
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"a"} title={"Personal Information"} />
            <p className=" privacytext">
              We collect certain types of information, such as name, telephone
              numbers, email address, physical address, financial information,
              and other information relevant for us to carry out our know your
              customer (KYC) or due diligence on them. This due diligence may be
              carried out during and/or after onboarding with us. We may retain
              this information for a period of time after use. This timeline is
              guided by our data retention policy, data protection laws, and
              industry regulations and guidelines applicable to us.
            </p>
          </div>
          <div className=" flex flex-col gap-6">
            <p className=" privacytext">
              In addition to using your Personal Information for KYC and due
              diligence, we may also use them for the following purposes:
            </p>
            <ol className=" flex flex-col gap-6 list-disc pl-[24px]">
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Provide you with the required services, including opening an
                  account, carrying out necessary monitoring, ongoing compliance
                  and reporting to regulators.
                </p>
              </li>
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Respond to your questions or requests.
                </p>
              </li>
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Address inappropriate use of our app.
                </p>
              </li>
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Prevent, detect and manage risk against fraud and illegal
                  activities using internal and third party screening tools.
                </p>
              </li>
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Verify your identity and the information you provide in line
                  with Indigo’s statutory obligations using internal and third
                  party tools.
                </p>
              </li>
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Resolve disputes that may arise, including investigations by
                  law enforcement or regulatory bodies.
                </p>
              </li>
              <li>
                <p className=" text-[18px] leading-[28px] text-gray90 font-normal">
                  Any other legal obligation which we may have with respect to
                  the provision of our services.
                </p>
              </li>
            </ol>

            <p className=" privacytext">
              We may retrieve additional Personal Information about you from
              third parties, such as our partners which you deal with, and other
              identification/verification services.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"b"} title={"transaction data"} />
            <p className=" privacytext">
              During a transaction, we collect certain data from you depending
              on which of our services you are using. This information is
              collected and processed on an absolute necessity basis as required
              by law and industry standards to which we are mandated to comply.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"c"} title={"Other Information"} />
            <p className="privacytext">
              <span className=" text-paragraph text-[18px] leading-7 font-semibold">
                Analytics{" "}
              </span>
              we analyse our relationship and transactional information to
              derive unique data. For example, we may generate propensities,
              attributes and/or scores for marketing, security or fraud
              purposes.
            </p>
          </div>

          <p className="privacytext">
            <span className=" text-paragraph text-[18px] leading-7 font-semibold">
              Information derived from your use of our website and other
              technical products{" "}
            </span>
            this includes information regarding your interactions with our
            websites, applications or advertisements, including IP address,
            device identifiers, settings, characteristics, advertising ID,
            browsing history, web server logs, server log records, activity log
            records, keystroke timing and other information collected using
            cookies and similar technologies. We may also use such data to
            improve features, website content and analyse data to develop
            products and services.
          </p>
          <p className="privacytext">
            <span className=" text-paragraph text-[18px] leading-7 font-semibold">
              Audio and Visual Information -
            </span>
            this includes audio, electronic, visual or similar information
            relating to your interactions with us.
          </p>
          <p className="privacytext">
            <span className=" text-paragraph text-[18px] leading-7 font-semibold">
              Government-Issued Identification Numbers -{" "}
            </span>
            we may request a government issued ID to carry our verification of
            your identity. We may use third party services for this
            verification.
          </p>
        </section>
        <section id="personal" className=" flex flex-col gap-6">
          <NumberedHeading
            no={"4"}
            title={
              "Purposes and Lawful Basis for Processing Personal Information"
            }
          />
          <p className="privacytext">
            We may rely on one of more of the following lawful basis to process
            your personal data:
          </p>
          <div className=" flex flex-col gap-3">
            <h6 className=" text-[18px] leading-[28px] text-paragraph font-semibold">
              Purpose of Collecting and Processing
            </h6>
            <ol className=" flex flex-col gap-3 list-decimal pl-[24px]">
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                KYC Verification and Onboarding.
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Transaction Processing and Monitoring.
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Issues Resolution
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Sales and marketing.
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Generating de-personalized information for product development
                and improvement
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Fraud Monitoring, Chargebacks and Dispute Resolution.
              </li>
            </ol>
          </div>
          <div className=" flex flex-col gap-3">
            <h6 className=" text-[18px] leading-[28px] text-paragraph font-semibold">
              Categories of Data Collected
            </h6>
            <ol className=" flex flex-col gap-3 list-decimal pl-[24px]">
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Personal Data; Government- Issued Identification Numbers;
                Information derived from your use of our website and other
                technical products.
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Transaction Data; Government-Issued Identification Number;
                Geolocation Information;
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Personal Data; Transaction Data
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Analytics Data
              </li>
            </ol>
          </div>
          <div className=" flex flex-col gap-3">
            <h6 className=" text-[18px] leading-[28px] text-paragraph font-semibold">
              Lawful Basis
            </h6>
            <ol className=" flex flex-col gap-3 list-decimal pl-[24px]">
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Your Consent
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Lawful purpose - we are required by our regulators to collect
                this information
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                Legitimate interests (ours and those of others) such as to
                protect you, us, or others from threats (such as security
                threats or fraud); to enable or administer our business, such as
                for quality control, compliance, consolidated reporting and
                customer service; to manage corporate transactions, such as
                mergers or acquisitions; and to understand and improve our
                business or customer relationships generally
              </li>
              <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
                To fulfil the terms of the contract which you sign with us at
                the point of onboarding
              </li>
            </ol>
          </div>
        </section>
        <section id="purpose" className=" flex flex-col gap-6">
          <NumberedHeading no={"5"} title={"Purpose Limitation"} />
          <p className="privacytext">
            Indigo collects Personal Information only for identified purposes and
            for which consent has been obtained. Such Personal Information
            cannot be reused for another purpose that is incompatible with the
            original purpose, except consent is obtained for such purpose.
          </p>
        </section>
        <section id="data" className=" flex flex-col gap-6">
          <NumberedHeading no={"6"} title={"Data Minimization"} />
          <p className="privacytext">
            Indigo limits Personal Information collection and usage to data that
            is relevant, adequate, and absolutely necessary for carrying out the
            purpose for which the data is processed.
          </p>
          <p className="privacytext">
            Indigo will evaluate whether and to what extent the processing of
            Personal Information is necessary and where the purpose allows,
            anonymized data will be used.
          </p>
        </section>
        <section id="cookies" className=" flex flex-col gap-6">
          <NumberedHeading no={"7"} title={"Cookies"} />
          <p className="privacytext">
            We use cookies to identify you as a User and make your user
            experience easier, customise our services, content and advertising,
            amongst others.
          </p>
        </section>
        <section id="age" className=" flex flex-col gap-6">
          <NumberedHeading no={"8"} title={"Age Restriction"} />
          <p className="privacytext">
            Our website and Services are not directed to children under 18. We
            do not knowingly collect information from, or conduct business with,
            children under 18. If as a parent or guardian, you become aware that
            your child or ward has provided us with any information without your
            consent, please contact us through the details provided in this
            Privacy Notice.
          </p>
        </section>
        <section id="protect" className=" flex flex-col gap-6">
          <NumberedHeading no={"9"} title={"How We Protect your Information"} />
          <p className="privacytext">
            Indigo shall establish adequate controls in order to protect the
            integrity and confidentiality of Personal Information, both in
            digital and physical formats and to prevent Personal Information
            from being accidentally or deliberately compromised.
          </p>
          <p className="privacytext">
            Indigo is committed to managing your Personal Information in line
            with global industry best practices. We protect your Personal
            Information using physical, technical, and administrative security
            measures to reduce the risks of loss, misuse, unauthorised access,
            disclosure and alteration, we also use industry recommended security
            protocols to safeguard your Personal Information. Other security
            safeguards include but are not limited to data encryption,
            firewalls, and physical access controls to our building and files
            and only granting access to Personal Information to only employees
            who require it to fulfil their job responsibilities. Any Personal
            Information processing undertaken by an employee who has not been
            authorised to carry such out as part of their legitimate duties is
            unauthorised.
          </p>
          <p className="privacytext">
            Employees may have access to Personal Information only as is
            appropriate for the type and scope of the task in question and are
            forbidden to use Personal Information for their own private or
            commercial purposes or to disclose them to unauthorised persons, or
            to make them available in any other way.
          </p>
        </section>
        <section id="transfer" className=" flex flex-col gap-6">
          <NumberedHeading
            no={"10"}
            title={"Transfer of Personal Information"}
          />
          <div>
            <LetteredHeading
              no={"a"}
              title={"Third Party Processor within Nigeria"}
            />
            <p className="privacytext">
              Indigo may engage the services of third parties in order to process
              your Personal Information collected by us. The processing by such
              third parties shall be governed by a written contract with Indigo
              to ensure adequate protection and security measures are put in
              place by the third party for the protection of Personal
              Information in accordance with applicable laws and regulatory
              standards.
            </p>
          </div>
          <div>
            <LetteredHeading
              no={"b"}
              title={"Transfer of Personal Information to Foreign Country"}
            />
            <p className="privacytext">
              We use third party services which may be located outside of the
              country in which the Indigo entity which collected or is processing
              your data is located. We ensure that when we share your personal
              data with such third party service providers, we ensure to put in
              place appropriate safeguard mechanisms, in accordance with best
              practices and applicable data protection law, to ensure the
              protection of your personal data.
            </p>
          </div>
        </section>
        <section id="choices" className=" flex flex-col gap-6">
          <NumberedHeading no={"11"} title={"Choices and Rights"} />
          <p className="privacytext">
            Individuals who have Personal Information held by Indigo may exercise
            any of the rights listed below:
          </p>
          <ol className=" flex flex-col gap-3 list-disc pl-[24px]">
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to request and access their Personal Information collected
              and stored. Where data is held electronically in a structured
              form, such as in a database, you have a right to receive that data
              in a common electronic format;
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to information on their personal information collected and
              stored;
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to objection or request for restriction;
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to object to automated decision making;
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to request rectification and modification of Personal
              Information which Indigo keeps;
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to request for deletion of your data;
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to request the movement of data from Indigo to a third party;
              this is the right to the portability of data; and
            </li>
            <li className=" text-[18px] leading-[28px] text-gray90 font-normal">
              Right to object to, and to request that Indigo restricts the
              processing of their information.
            </li>
          </ol>
          <p className="privacytext">
            Such requests will be reviewed by Indigo’s Data Protection Officer
            and carried out except as restricted by law or Indigo’s statutory
            obligations. You may decline to provide your personal Information
            when it is requested by Indigo, however, certain services or all the
            services may be unavailable to you. You may review your account
            settings and update your Personal Information directly or by
            contacting us.
          </p>
        </section>
        <section id="contact" className=" flex flex-col gap-6">
          <NumberedHeading no={"12"} title={"Contact"} />
          <p className="privacytext">
            If you have any questions relating to this Privacy Notice or would
            like to find out more about exercising your data protection rights,
            please reach out to us via email at “support@Indigo.com”.
          </p>
        </section>
        <section id="update" className=" flex flex-col gap-6">
          <NumberedHeading
            no={"13"}
            title={"Updates, Modifications & Amendments"}
          />
          <p className="privacytext">
            We may need to update, modify or amend our Privacy Notice as our
            technology evolves and as required by law. We reserve the right to
            make changes to this Privacy Notice from time to time and notify
            Users of material changes. The Privacy Notice will apply from the
            effective date provided on our website at the time of publishing the
            updates.
          </p>
          <p className="privacytext">
            We advise that you check this page often, referring to the date of
            the last modification on the page. If a User objects to any of the
            changes to this Privacy Notice, the User must cease using this
            website or any of our Services. Where such User continues to use
            this website and/or any of our Services, it shall continue to be
            bound by the terms of this Privacy Notice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
