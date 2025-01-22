import HighlightedSpan from "@/components/highlightedSpan/HighlightedSpan";
import LetteredHeading from "@/components/letteredHeading/LetteredHeading";
import NumberedHeading from "@/components/numberedHeading/NumberedHeading";
import React, { useEffect} from "react";

const MainContent = ({ setActiveLink }: {
  setActiveLink: (id: string)=>void;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
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
      <section id="" className=" flex flex-col gap-6">
        <div className=" flex flex-col gap-6">
          <h1 className=" text-[30px] sm:text-[56px] font-semibold leading-[38px] sm:leading-[44px] text-paragraph">
            Terms of use
          </h1>
          <p className=" text-[16px] sm:text-[18px] text-mastBlue70 font-normal leading-[28px]">
            Published: 8th,Apr, 2024
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <p className=" privacytext">
            Please read these Terms of Service (“Terms”) carefully as they
            contain important information about your legal rights, remedies, and
            obligations as guaranteed by Indigo Limited (“Indigo”, “we”,
            “us” or “our”). By accessing or using this website, our website
            application, and any of our services (altogether, “Indigo” or the
            “Platform”), you agree to the terms and conditions below (“Terms of
            Use” or “Terms”).
          </p>
          <p className=" privacytext">
            You understand that your use of any of our services is also subject
            to Indigo’s privacy notice, cookies policy, and acceptable use policy
            (collectively, the “Related Agreements). You are advised not to use
            any of the services if you have any objections to any of these
            terms.
          </p>
          <p className=" privacytext">
            We reserve the right to change these Terms from time to time without
            notice by posting an updated copy of these Terms to the website. You
            acknowledge and agree that it is your responsibility to review these
            Terms periodically to familiarise yourself with any modifications.
            Your continued use of this website after such modifications will
            constitute acknowledgment and agreement with the modified Terms.
          </p>
        </div>
      </section>
      <div className=" flex flex-col gap-10">
        <section id="about" className=" flex flex-col gap-6">
          <NumberedHeading no={"1"} title={"About Us"} />
          <p className=" privacytext">
            Indigo is a technology company that enables individuals to deal in
            Digital Currencies and Digital Assets (“Services”).
          </p>
          <p className=" privacytext">
            “Digital Currencies” are digital tokens or digital assets which
            are encrypted with digital assetsgraphic technologies and are primarily
            managed and stored over computer systems.
          </p>
          <p className=" privacytext">
            “Digital Assets” are digital representations of value recorded on a
            digital assetsgraphically secured distributed ledger or similar technology.
          </p>
          <p className=" privacytext">
            “Fiat Currency” means the official currency of a country issued by
            the government of a country.
          </p>
        </section>

        <section id="age" className=" flex flex-col gap-6">
          <NumberedHeading no={"2"} title={"Age Restriction"} />

          <p className="privacytext">
            The Indigo Platform is intended solely for users who are 18 or older.
            By accessing or using the Platform, you represent and warrant that
            you are at least 18 years old or older. We do not knowingly transact
            or provide any services to people younger than the age of 18. We
            reserve the right to automatically terminate your use of our
            Platform once we discover that you are less than 18 years old.
          </p>
        </section>
        <section id="registration" className=" flex flex-col gap-6">
          <NumberedHeading no={"3"} title={"Registration and User Account"} />
          <div className=" flex flex-col gap-3">
            <LetteredHeading
              no={"3.1"}
              title={"Registration of Indigo User Account"}
            />
            <p className=" privacytext">
              You must register for an Indigo account (a “User Account”;) to use
              the Indigo Services by providing us with information about yourself
              and such other details as we may require from time to time. You
              are fully responsible for all activities that occur under your
              User Account. We, however, reserve the right to reject your
              application for a User Account, or cancel an existing User
              Account, for any reason, at our sole discretion.
            </p>
            <p className=" privacytext">
              For the avoidance of doubt, all User Accounts are provided at our
              absolute discretion. We reserve the right to refuse any
              application for a User Account without reason or to limit the
              number of User Accounts that you may hold.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <LetteredHeading
              no={"3.2"}
              title={
                "By opening a User Account you agree that you will use your User Account only for yourself and not on behalf of any third party"
              }
            />
          </div>

          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"3.3"} title={"Notification of Change:"} />
            <p>
              In the event that you change any information provided to us at
              registration, you undertake to notify us within 14 days of such
              change.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"3.4"} title={"Identity Verification:"} />
            <p className="privacytext">
              You will need to comply with our identity verification procedures
              before you are permitted to open a User Account and access and use
              the Services, by providing us with certain information about
              yourself and your organization. All the information that you
              provide must be complete, accurate, and truthful. You must update
              this information whenever it changes. You authorise us to make
              inquiries, whether directly or through third parties, that we
              consider necessary to verify your identity or protect you and/or
              us against fraud, money laundering, terrorist financing, or other
              financial crime, and to take any action we deem necessary based on
              the results of such inquiries. When we carry out inquiries, you
              acknowledge and understand that your personal data may be
              disclosed to identity verification, compliance data recordation,
              credit reference, fraud prevention, or financial crime agencies,
              and that these agencies may respond to our inquiries in full. You
              can review our Privacy Notice for more information about how we
              process your personal data.
            </p>
            <p className="privacytext">
              We may also require you to comply with our enhanced due diligence
              procedures by submitting additional information about yourself,
              your business or your Authorised Users, providing additional
              records or documentation, or having face to face meetings with
              representatives of Indigo.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"3.5"} title={"User Account Security:"} />
            <p className="privacytext">
              We are committed to maintaining the security of our Platform, and
              have implemented industry-standard protection for the Services.
              You must keep and treat all credentials (such as username and
              password) associated with the Platform and Services as
              confidential information and not disclose such information to any
              third party. You are solely responsible for managing and
              maintaining the security of any information relating to such
              credentials and agree that we assume no liability for any loss or
              consequences caused by authorised or unauthorised use of your User
              Account credentials or any resulting harm you may suffer.
            </p>
          </div>
        </section>
        <section id="accessing" className=" flex flex-col gap-6">
          <NumberedHeading no={"4"} title={"Accessing the Services"} />
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"4.1"} title={"Limited License:"} />
            <p className=" privacytext">
              We grant you a revocable, limited, non-exclusive,
              non-transferable, royalty-free, and non-sublicensable license to
              access and use the Platform and services through your computer or
              Internet-compatible devices for your personal or internal purposes
              solely in accordance with these Terms.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <LetteredHeading no={"4.2"} title={"Restrictions:"} />
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.1."} />
              You may only use our services for your own personal,
              non-commercial use and not on behalf of or for the benefit of any
              third party. Your use of the Services must comply with all
              applicable laws. If your use of the Services is prohibited by
              applicable law, then you are not authorised to use the Services.
              We are not responsible if you use the Services in any manner that
              violates applicable law.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.2."} />
              Your use of the Services should not violate public interests,
              public morals, or the legitimate interests of others, including
              any actions that would interfere with, disrupt, negatively affect,
              or prohibit other Users from using the Services;
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.3."} />
              You must not breach these Terms, the Privacy Notice, or any other
              agreement between you and us.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.4."} />
              You shall not reproduce, duplicate, copy, sell, resell, or exploit
              any portion of the Service, use of the Service, or access to the
              Service without our express written permission.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.5."} />
              You shall not send or receive what we reasonably believe to be
              potentially fraudulent funds.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.6."} />
              You must not refuse to cooperate in an investigation or provide
              confirmation of your identity or any information you provide to
              us.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.7."} />
              You shall not control a User Account that is linked to another
              User Account that has engaged in any of these restricted
              activities.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.8."} />
              You may not (i) use any deep linking, web crawlers, bots, spiders
              or other automatic devices, programs, scripts, algorithms or
              methods, or any similar or equivalent manual processes to access,
              obtain, copy or monitor any part of the Platform, or replicate or
              bypass the navigational structure or presentation of our Services
              in any way, in order to obtain or attempt to obtain any materials,
              documents or information in any manner not purposely provided
              through our Services; (ii) attempt to access any part or function
              of the Platform without authorization, or connect to our Services
              or any of our servers or any other systems or networks of any
              Services provided through the services by hacking, password mining
              or any other unlawful or prohibited means; (iii) probe, scan or
              test the vulnerabilities of our Services or any network connected
              to the Platform, or violate any security or authentication
              measures on our Services or any network connected to our Services;
              (iv) reverse look-up, track or seek to track any information of
              any other Users or visitors of our Services; (v) take any actions
              that imposes an unreasonable or disproportionately large load on
              the infrastructure of systems or networks of our Services or the
              infrastructure of any systems or networks connected to our
              services;(vi) use any devices, software or routine programs to
              interfere with the normal operation of our Services or any
              transactions on our Services, or any other person’s use of
              ourServices; (vii) forge headers, impersonate, or otherwise
              manipulate identification to disguise your identity or the origin
              of any messages or transmissions you send to ust; or (viii) use
              our Services in an illegal way.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"4.2.9."} />
              You shall not harass and/or threaten our employees, agents, or
              other users.
            </p>
          </div>
        </section>
        <section id="risk" className=" flex flex-col gap-6">
          <NumberedHeading no={"5"} title={"Risk Statement"} />
          <p className="privacytext">
            Trading in Digital Assets could pose some volatility risks.
            Therefore, you are advised to deal with them in accordance with your
            level of understanding of how they work. You accept and agree that
            you are solely responsible for any decision to buy, sell, trade or
            otherwise hold or deal with digital asset.
          </p>
          <p className="privacytext">
            Under no circumstances does any information contained on the
            Platform, or provided to you through your User Account or by any
            employee, agent or affiliate of Indigo, constitute financial,
            investment or other professional advice. You are solely responsible
            for any decision to store, buy or sell digital asset, and such
            decisions should take into account your risk tolerance and financial
            circumstances.
          </p>
        </section>
        <section id="transaction" className=" flex flex-col gap-6">
          <NumberedHeading no={"6"} title={"Transaction"} />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"6.1."} />
              The Platform allows you to sell, buy and swap Digital Assets and
              Digital Currencies in any country where we currently operate
              (“Supported Country”).
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"6.2."} />
              We reserve the right to cease providing the Services in any of the
              Supported Countries at any time and without any notice to you.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"6.3."} />
              We will attempt to process transactions promptly, but any
              transaction may be delayed or cancelled for a number of reasons,
              including but not limited to: our efforts to verify your identity;
              to validate your transaction instructions; to contact you; or
              otherwise to comply with applicable law; or due to variations in
              business hours and currency availability; or due to additional
              compliance requirements or/and operating procedures and business
              guidelines our
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"6.4."} />
              Banks have specified times for cutoffs for the receipt and
              dispatch of electronic payments. You acknowledge and agree that we
              cannot be held liable for any delay in onward payment attributable
              to the late arrival of funds or instructions for payment related
              to the cutoff times of the designated bank.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"6.5."} />
              If you notice that funds that do not belong to you have been
              credited to your account, you must inform us immediately. If an
              amount is incorrectly credited to your User Account, we may debit
              it without your separate consent. If you no longer have the funds
              in your User Account to cover such a debit, you must repay us
              within 3 Working Days of receiving our request. If you fail to
              cooperate and refund the funds, we will take legal and enforcement
              action.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"6.6."} />
              We may refuse to authorise any use of the Platform that could
              breach these terms and conditions or if we have reasonable grounds
              for suspecting that you or a third party have committed or are
              planning to commit fraud or any other illegal or un-permitted use
              of the Platform.
            </p>
          </div>
        </section>
        <section id="account" className=" flex flex-col gap-6">
          <NumberedHeading
            no={"7"}
            title={"Account information and Transaction records"}
          />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"7.1."} />
              You will be able to access your account history on the Platform.
              You must review your account history carefully and let us know if
              you see any entries or Transactions that you do not recognise or
              you think are incorrect within fourteen (14) calendar days of the
              date that your account history is provided or made available to
              you.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"7.2."} />
              We may rectify any error in your account history at any time, and
              reserve the right to void, cancel or reverse any Transaction
              involving or deriving from a manifest error or to amend the
              details of such Transaction to reflect what we reasonably consider
              to be the correct or fair details of such a Transaction.{" "}
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"7.3."} />
              You acknowledge and agree that where you execute any Transaction
              with improper or malicious intent and/or in the case of manifest
              error, Indigo is authorised by you (without any payment or penalty
              or liability due by Indigo and provided that such action is in
              compliance with Applicable Law) to either:
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"a."} />
              Cancel/void such Transaction and treat such Transaction as if they
              had never been entered into; or
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"b."} />
              Amend the price(s) of such Transaction (upon notice from Indigo to
              you of the amended price(s)) to reflect the prevailing market
              price(s) as at the relevant time, as determined by Indigo by
              reference to an available source for fair market pricing;
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"7.4."} />
              If Indigo cancels a Transaction pursuant to the rights referred
              herein, Indigo will reverse any transfers of Digital Assets that
              have been made to and/or from your User Account in connection with
              such Transaction as if that Transaction had never taken place.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"7.5."} />
              If Indigo amends a Transaction pursuant to the rights referred
              herein, Indigo will confirm the details of the amended terms of the
              Transaction to you through an agreed communication channel and
              will affect such transfers of Digital Assets to and/or from your
              User Account as are required to reflect the terms of the amended
              Transaction.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"7.6."} />
              You acknowledge and agree that you shall be solely responsible for
              your own transactions with any third parties that may have been
              entered into in connection with or reliance on any Transaction(s)
              that may be subject to any cancellation/amendment pursuant to
              Indigo’s rights herein.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"7.7."} />
              We may be required under Applicable Law to share information about
              your User Account and Account History with third parties. You
              acknowledge and agree that we are entitled to disclose such
              information. For more information about how we process your
              personal data you can review our Privacy Notice.
            </p>
          </div>
        </section>
        <section id="using" className=" flex flex-col gap-6">
          <NumberedHeading no={"8"} title={"Using your Account"} />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"8.1."} />
              You must ensure that any Instruction submitted is complete and
              accurate. We are not required to verify the accuracy, authenticity
              or validity of any Instruction and will not monitor or reject
              Instructions on the basis that they are, or appear to be,
              duplicates. However, if we are in doubt as to the accuracy,
              authenticity or validity of an Instruction, we may refuse to act
              upon or defer acting upon any Instruction, or seek further
              information with respect to the Instruction.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"8.2."} />
              Instructions are irrevocable and therefore once an Instruction has
              been submitted you, or your Permitted Users, have no right to
              rescind or withdraw it without our written consent. Your
              Instruction is not deemed to be received by us until it has been
              received by our server. Our record of all Instructions will be
              conclusive and binding on you for all purposes.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"8.3."} />
              Acting on your Instructions. By submitting an Instruction you or
              your Permitted Users are authorising us to initiate the
              Transaction on your User Account. We are therefore authorised to
              credit or debit (or provide settlement information to third
              parties for the purposes of the third party crediting or debiting)
              your Digital Assets from your User Account in accordance with your
              Instruction. If you have insufficient Digital Assets or Fiat
              Currency in your User Account to effect the Transaction (i.e. less
              than the required amount to settle the Transaction and to pay all
              the fees associated with the Transaction), then we have the right
              to refuse to effect any Transaction. Indigo may also refuse to act
              on instructions to the extent permitted by these Terms. It is your
              responsibility to hold sufficient Digital Assets or Fiat Currency
              credited in your User Account.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"8.4."} />
              You are aware that Instructions and information transmitted on the
              Platform or by email are generally transmitted via the internet
              and may be routed via public, transnational installations which
              are not specifically protected. We cannot guarantee that the
              Instructions and information transmitted will be completely
              protected against unauthorised access, and you accept the
              associated risks.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"8.5."} />
              Withdrawals. Subject to these Terms and any applicable Product
              Terms, and provided that you have sufficient balance on your User
              Account and the relevant Digital Assets are not on hold in your
              User Account in connection with any Indigo Service, you may give
              Instructions to Indigo to transfer Digital Assets to an external
              wallet address by submitting a withdrawal request on the Platform.
              Upon receipt of the withdrawal request, Indigo will: (i) deduct
              your User Account balance; and (ii) initiate an on-chain transfer
              to an external wallet designated by you. Indigo may not process a
              withdrawal request if, in our reasonable opinion, we consider that
              Applicable Law prevents the execution of the relevant withdrawal.
              Indigo may also suspend withdrawals at such time deemed appropriate
              by Indigo to resolve any incidents on the Platform. Once such
              incidents have been resolved, Indigo will resume withdrawals.
            </p>
          </div>
        </section>
        <section id="exchange" className=" flex flex-col gap-6">
          <NumberedHeading no={"9"} title={"Exchange rate"} />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"9.1."} />
              The foreign exchange conversion rate shown on the Platform is the
              rate applicable for currency conversion transactions done at that
              particular day and time.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"9.2."} />
              The exchange rates specified on the Platform may fluctuate from
              time to time in accordance with fluctuations in international
              exchange rate markets.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"9.3."} />
              Each time you use the Platform, the exchange rate and the fee we
              are charging for the Service will be made available to you before
              the transaction is completed.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"9.4."} />
              When you initiate a transaction, we agree to transfer the
              Transaction Amount to the Recipient at the rate specified on the
              Platform at that time.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"9.5."} />
              The total amount (the Transaction Amount, Transaction Fee and
              other applicable fees and charges) that you will be required to
              pay and the relevant exchange rate will be displayed clearly on
              the Platform before you are asked to confirm your Transaction and
              proceeding with the Transaction at this point is entirely
              optional.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"9.6."} />
              Where we have confirmed the deposit of your payment, this exchange
              rate will apply even where there is a delay in processing your
              transaction. However, you understand that an exchange rate may
              change after 5 mins after the initiation of a transaction and you
              do not complete the transaction by sending us, and we confirming,
              your payment.
            </p>
          </div>
        </section>
        <section id="fees" className=" flex flex-col gap-6">
          <NumberedHeading no={"10"} title={"Fees"} />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"10.1."} />
              If you submit a transaction that results in us becoming liable for
              fees or charges, such as chargebacks or other fees, you agree to
              reimburse us for all such fees.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"10.2."} />
              We are not responsible for any charges applied by the recipient’s
              bank resulting from the receipt of funds into the recipient’s bank
              User Account.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"10.3."} />
              You should contact the recipient’s bank directly for details about
              any such charges that may be applicable to the transaction.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"10.4."} />
              10.4. Your User Account will not earn any interest. Also, you will
              not be entitled to any interest for the period during which the
              funds to be remitted are with the Bank, or pending remittance, in
              the course of remittance, or for any other period.
            </p>
          </div>
        </section>
        <section id="cancellation" className=" flex flex-col gap-6">
          <NumberedHeading no={"11"} title={"Cancellation and Refund"} />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"11.1."} />
              If you use the Platform then you have a right to cancel this Terms
              within a period of 14 days beginning on the date of the successful
              registration of your User Account, to withdraw from this Terms and
              cancel Service, without any penalty, but subject to deduction of
              any reasonable costs incurred by us in the performance of any part
              of the provision of Service before you cancel. You must contact us
              within this 14-day period and inform us that you wish to withdraw
              from this Terms and you must not use the Service. We will then
              cancel the Service and reimburse the available balance on the User
              Account to you. However, we reserve the right to hold the
              available balance for up to 30 business days from receipt of your
              instructions before returning the balance to ensure that details
              of all Transactions have been received.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"11.2."} />
              After this cancellation period, you may only terminate the Service
              as described in the termination section.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"11.3."} />
              After the Transaction Amount has been sent to the Recipient you
              cannot request for a refund.
            </p>
          </div>
        </section>
        <section id="termination" className=" flex flex-col gap-6">
          <NumberedHeading no={"12"} title={"Termination"} />
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1."} />
              Suspension of Your User Accounts: You agree that we shall have the
              right to immediately suspend your User Account, freeze or lock the
              funds in your User Account, and suspend your access to the
              Platform and the Services for any reason whatsoever, including if
              we suspect any such User Accounts to be in violation of these
              Terms, our Privacy Notice, or any applicable laws and regulations.
              You agree that we shall not be liable to you for any permanent or
              temporary modification of your User Account or suspension or
              termination of your access to all or any portion of our services.
              We reserve the right to keep and use the transaction data or other
              information related to such User Accounts. The above User Account
              controls may also be applied in the following cases:
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.1"} />
              Your User Account is subject to a governmental proceeding,
              criminal investigation, or other pending litigation.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.2"} />
              We reasonably believe that you have used or are likely to use the
              Platform and Service or allow them to be used, in breach of these
              Terms or to commit an offence;
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.3"} />
              We suspect that you have provided false or misleading information
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.4"} />
              Required to fulfil our legal obligations in relation to the fight
              against money laundering and financing of terrorism;
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.5"} />
              We detect unusual activities in your User Account.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.6"} />
              We detect unauthorised access to your User Account.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.7"} />
              We are required to do so by a court order or command from a
              regulatory or government authority.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.8"} />
              We have reasonable grounds to believe you are carrying out a
              prohibited or illegal activity
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.1.9"} />
              We are unable to verify your identity or any other information
              pertaining to you, your User Account or a Transaction.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.2"} />
              Where it is practicable and lawful for us to do so or would not
              compromise reasonably justified security reasons, we will notify
              you via email of the suspension or restriction and the reasons for
              it before such measures take place or immediately thereafter.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.3"} />
              We will reinstate your User Account or execute the relevant
              Transaction(s) as soon as practicable after the reasons stated in
              section 12.1 no longer apply or exist.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.4"} />
              If you wish to terminate the Services at any time, you must
              request termination and the return of the available balance in
              your User Account by email to our address from the email address
              registered in your User Account. Our Customer Services department
              will then suspend all further use of the Services.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.5"} />
              Once we have received all the necessary information from you and
              all Transactions and applicable Fees and charges have been
              processed, we will refund to you any available balance on your
              User Account less any Fees and charges payable to us, provided
              that:
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.51"} />
              You have not acted fraudulently or with gross negligence or in
              such a way as to give rise to reasonable suspicion of fraud or
              gross negligence; and
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.52"} />
              We are not required to withhold your available balance by law or
              regulation, or at the request of the police, a court, or any
              regulatory authority.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"12.6"} />
              If, following reimbursement of the available balance, any further
              Transactions are found to have been made or charges or Fees
              incurred using the User Account or we receive a reversal of any
              prior funding Transaction, we will notify you of
            </p>
          </div>
        </section>
        <section id="how" className=" flex flex-col gap-6">
          <NumberedHeading no={"13"} title={"How We Contact Each Other"} />

          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"13.1"} />
              How you can contact us: If you have any questions, complaints,
              feedback, comments, or concerns regarding these Terms or the
              Services, please contact us at our email or phone number. When you
              contact us, please provide us with the relevant information we
              need to verify your User Account.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"13.2"} />
              How we will contact you: Any and all communications from us may be
              provided to you via electronic mail at the address you provided
              when accessing the Services. We shall not be responsible for any
              harm you may suffer as a result of your failure to receive any
              notice provided to you in connection with these Terms or your use
              of the Services so long as such notice is provided to such an
              email address.
            </p>
          </div>
        </section>
        <section id="intellectual" className=" flex flex-col gap-6">
          <NumberedHeading no={"14"} title={"Intellectual Property"} />
          <p className="privacytext">
            We do not grant you any licenses, express or implied, to our
            intellectual property or the intellectual property of our licensors,
            except as expressly stated in these Terms. All the text, graphics,
            user interfaces, visual interfaces, photos, sounds, process flow
            diagrams, computer code (including html code), programs, software,
            products, information, and documents, as well as the design,
            structure, selection, coordination, expression, look and feel, and
            layout of any content included in the services or provided through
            the Services, are exclusively owned, controlled, and/or licensed by
            Indigo or, its members, parent companies, licensors, or affiliates.
          </p>
        </section>
        <section id="privacy" className=" flex flex-col gap-6">
          <NumberedHeading no={"15"} title={"Privacy notice"} />
          <p className="privacytext">
            Indigo takes the privacy of its users very seriously. You understand
            that by using the Services, you consent to the collection, use,
            storage, and disclosure of your information as set forth in these
            Terms and our Privacy Notice.
          </p>
        </section>
        <section id="website" className=" flex flex-col gap-6">
          <NumberedHeading no={"16"} title={"Website Accuracy"} />
          <p className="privacytext">
            We endeavor to verify the accuracy of any information displayed,
            supplied, passing through, or originating from the Services, but
            such information may not always be accurate or current. Accordingly,
            you should independently verify all information before relying on
            it, and any decisions or actions taken based upon such information
            are your sole responsibility. We make no representation or warranty
            of any kind, express or implied, statutory or otherwise, regarding
            the contents of the Services, information and functions made
            accessible through the Services, any hyperlinks to third-party
            websites, the security associated with the transmission of
            information through the Services, or any website linked to the
            Services.
          </p>
        </section>
        <section id="third" className=" flex flex-col gap-6">
          <NumberedHeading no={"17"} title={"Third-Party Websites"} />
          <p className="privacytext">
            The Platform may include links or connections to websites or
            services operated by third parties which are not under the ownership
            or control of us, our third-party service providers, or licensors.
            We provide such links and connections for your reference only. We do
            not control such third-party websites or services and are not
            responsible for their availability or content. Our inclusion of such
            links and connections does not imply our endorsement of such third-
            party websites or services or any association with their owners or
            operators. We assume no liability whatsoever for any such
            third-party websites or services or any content, features, products,
            or practices of such third-party websites or services. Your access
            to and use of such third-party websites and services are subject to
            applicable third-party terms and conditions and privacy policies. We
            encourage you to read the terms and conditions and Privacy Notice
            each third-party website or service that you visit or use.
          </p>
        </section>
        <section id="representation" className=" flex flex-col gap-6">
          <NumberedHeading no={"18"} title={"Representation and Warranties"} />
          <p className="privacytext">
            You represent and warrant to Indigo that:
          </p>
          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"18.1"} />
              How you can contact us: If you have any questions, complaints,
              feedback, comments, or concerns regarding these Terms or the
              Services, please contact us at our email or phone number. When you
              contact us, please provide us with the relevant information we
              need to verify your User Account.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.2"} />
              all documents and information you provide to us are true,
              accurate, complete, and up to date in all respects and may be
              relied upon by us in determining whether or not you are eligible
              to access the Platform or to use the Services.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.3"} />
              all decisions made in connection with these Terms were solely and
              exclusively based on your own judgment and after your own
              independent appraisal of your financial resources, ability, and
              willingness to take relevant risks and achieve financial
              objectives.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.4"} />
              these Terms and any agreement entered into pursuant to, or in
              connection with, these Terms constitute valid and legally binding
              obligations, enforceable against you in accordance with their
              respective terms.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.5"} />
              To the fullest extent permitted by applicable law and except as
              otherwise expressly provided in these terms, you expressly
              understand and agree that your use of the Services and all
              information, products, and other content (including that of third
              parties) included in or accessible from the Services is at your
              sole risk. The services are provided on an “as is” and “as
              available” basis without any warranty of any kind. to the maximum
              extent permitted by applicable law, we and our third-party service
              providers expressly disclaim any and all conditions,
              representations, and warranties of any kind as to the services and
              all information, products, and other content (including that of
              third parties) included in or accessible from the services,
              whether express, implied, statutory, or otherwise, including, but
              not limited to, any implied warranty of merchantability, fitness
              for a particular purpose, and non-infringement.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.6"} />
              Without limiting the foregoing, we and our third-party service
              providers make no warranty that (a) our Platform or Services will
              meet your requirements, (b) our Platform or Services will be
              uninterrupted, timely, secure, or error-free, (c) the results that
              may be obtained from the use of our Platform or Services will be
              accurate or reliable, (d) the quality of any products, services,
              information, or other material purchased or obtained by you
              through our Platform or Services will meet your expectations, or
              (e) any errors in our Platform or Services will be corrected. No
              oral or written information or advice obtained by you from us or
              our third-party service providers through or from the services
              will create any warranty not expressly stated in these terms.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.7"} />
              Any material downloaded or otherwise obtained through the Platform
              is done at your own discretion and risk, and you are solely
              responsible for any damage to your computer system or loss of data
              that results from the download of any such material.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"18.8"} />
              Warranties: Use of the Service is at your own risk. To the maximum
              extent permitted by applicable law, the Service is provided
              without warranties of any kind, whether express or implied,
              including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement. No advice or information, whether oral or
              written, obtained by you from us or through the Service will
              create any warranty not expressly stated herein. Without limiting
              the foregoing, Indigo, its subsidiaries, its affiliates, and its
              licensors do not warrant that the content is accurate, reliable or
              correct; that the Service will meet your requirements; that the
              Service will be available at any particular time or location,
              uninterrupted or secure; that any defects or errors will be
              corrected; or that the Service is free of viruses or other harmful
              components. Any content downloaded or otherwise obtained through
              the use of the Service is downloaded at your own risk and you will
              be solely responsible for any damage to your computer system or
              mobile device or loss of data that results from such download or
              your use of the Service. Further, Indigo does not warrant, endorse,
              guarantee, or assume responsibility for any product or service
              advertised or offered by a third party through the Service or any
              hyperlinked website or service, and Indigo will not be a party to
              or in any way monitor any transaction between you and third-party
              providers of products or services.
            </p>
            <p className=" privacytext">
              Federal law, some states, provinces, and other jurisdictions do
              not allow the exclusion and limitations of certain implied
              warranties, so the above exclusions may not apply to you. These
              Terms give you specific legal rights, and you may also have other
              rights which vary from state to state. The disclaimers and
              exclusions under these Terms will not apply to the extent
              prohibited by applicable law.
            </p>
          </div>
        </section>
        <section id="indemnification" className=" flex flex-col gap-6">
          <NumberedHeading no={"19"} title={"Indemnification"} />

          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"19.1"} />
              You agree to indemnify and hold harmless Indigo, its affiliates,
              subsidiaries, directors, managers, members, officers, and
              employees from any and all claims, demands, actions, damages,
              losses, costs or expenses, including without limitation,
              reasonable legal fees, arising out of or relating to: (a) your use
              of the Platform or Services; (b) breach of this Term of use or any
              other policy; (c) feedback or submissions you provide; (d) false,
              incomplete, or misleading information relied upon by us to verify
              your identity and source of funds, where applicable; or (e)
              violation of any rights of any other person or entity; provided
              however, that you shall not indemnify us for claims or losses
              arising out of our gross negligence or willful misconduct. This
              indemnity shall apply to your successors and assigns and shall
              survive any termination or cancellation of these Terms.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"19.2"} />
              Any and all of our indemnities, warranties, and limitations of
              liability (whether express or implied) are hereby excluded to the
              fullest extent permitted under law, except as set forth herein.
              Nothing in these Terms excludes or limits liability that may not
              be limited or excluded under applicable law.
            </p>
          </div>
        </section>

        <section id="limitation" className=" flex flex-col gap-6">
          <NumberedHeading no={"20"} title={"Limitation of Liability"} />

          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"20.1"} />
              To the maximum extent permitted by applicable law, in no event
              shall Indigo, its affiliates, agents, directors, employees,
              suppliers, or licensors be liable for any indirect, punitive,
              incidental, special, consequential, or exemplary damages,
              including without limitation damages for loss of profits,
              goodwill, use, data, or other intangible losses, arising out of or
              relating to the use of, or inability to use, the Service. Under no
              circumstances will Indigo be responsible for any damage, loss, or
              injury resulting from hacking,tampering or other unauthorised
              access or use of the Service or your User Account or the
              information contained in these Terms.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"20.2"} />
              To the maximum extent permitted by applicable law, Indigo assumes
              no liability or responsibility for any (i) errors, mistakes, or
              inaccuracies of content; (ii) personal injury or property damage,
              of any nature whatsoever, resulting from your access to or use of
              our service; (iii) any unauthorised access to or use of our secure
              servers and/or any and all personal information stored therein;
              (iv) any interruption or cessation of transmission to or from the
              Service; (v) any bugs, viruses, trojan horses, or the like that
              may be transmitted to or through our service by any third party;
              (vi) any errors or omissions in any content or for any loss or
              damage incurred as a result of the use of any content posted,
              emailed, transmitted, or otherwise made available through the
              Service; (vii) User Content or the defamatory, offensive, or
              illegal conduct of any third party; (viii) any act, omission,
              transaction, or exchange of services by and between Users; In no
              event shall Indigo, its affiliates, agents, directors, employees,
              suppliers, or licensors be liable to you for any claims,
              proceedings, liabilities, obligations, damages, losses or costs in
              an amount exceeding the amount you paid to Indigo hereunder or
              $50.00, whichever is greater.This limitation of liability section
              applies whether the alleged liability is based on contract, tort,
              negligence, strict liability, or any other basis, even if Indigo
              has been advised of the possibility of such damage.
            </p>
          </div>
        </section>
        <section id="dispute" className=" flex flex-col gap-6">
          <NumberedHeading no={"21"} title={"Dispute Resolution"} />

          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"21.1"} />
              We’re dedicated to providing an exceptional customer experience.
              If we fall short of your expectations, please contact our Customer
              Services Team at support@Indigo.com. They will promptly address
              your concerns. If you’re unhappy with their response, write to our
              Complaints Team via email. You will receive their findings within
              15 days. In exceptional circumstances where we are unable to reply
              within the first 15 days, we will reply, providing a reason for
              the delay and deadline for response, not more than 30 days after
              first receipt of complaint.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"21.2"} />
              If, after exhausting the procedures outlined in section 21.1
              above, you and Indigo are unable to reach a satisfactory resolution
              of any claim, cause of action, disagreement, or dispute (a
              “Claim”) then such Claim, except a threat to or breach of section
              11 (which threat or breach shall be subject to remedies at law or
              at equity in a court of competent jurisdiction, including but not
              limited to injunctive relief) shall be subject to the following
              dispute resolution process. In the event of such a disagreement or
              dispute, the dispute may be submitted to mediation at the Lagos
              Multi-door Court House, if we are unable to agree upon a mediator,
              by a mediator selected by the Chairman of the Lagos Court of
              Arbitration. The award of mediation shall be final and binding.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"21.3"} />
              Waiver of Class Action: With respect to all persons and entities,
              regardless of whether they have obtained or used the Service for
              personal, commercial or other purposes, all Claims must be brought
              in the parties’ individual capacity, and not as a plaintiff or
              class member in any purported class action, collective action,
              private attorney general action or other representative
              proceeding. This waiver applies to class mediation, and, unless we
              agree otherwise, the mediator may not consolidate more than one
              person’s Claims. You agree that, by entering into these Terms, you
              and Indigo are each waiving the right to participate in a class
              action, collective action, private attorney general action, or
              other representative proceeding of any kind.
            </p>
          </div>
        </section>
        <section id="misc" className=" flex flex-col gap-6">
          <NumberedHeading no={"22"} title={"Miscellaneous Provisions"} />

          <div className=" flex flex-col gap-3">
            <p className=" privacytext">
              <HighlightedSpan heading={"22.1"} />
              Governing Law: These Terms are made under and will be governed by
              and construed in accordance with the laws of the Federal Republic
              of Nigeria.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.2"} />
              Severability: If any provision of these Terms is invalid or
              unenforceable, such provision will be deemed severed from these
              Terms, but such invalidity or unenforceability won’t affect any
              other part of these Terms and the rest of these Terms will remain
              in full force and effect; provided, however, that if any such
              invalid or unenforceable provision can be modified so as to be
              valid and enforceable as a matter of law, then such provision is
              not deemed severed from these Terms and instead is deemed to have
              been modified so as to be valid and enforceable to the maximum
              extent permitted by law.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.3"} />
              Assignment: You may not transfer or assign any rights or
              obligations you have under these Terms or the Related Agreements
              without our prior written consent. To the extent permitted by
              applicable law, we may transfer or assign these Terms or any right
              or obligation under these Terms at any time without your consent.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.4"} />
           Waiver: If we don’t exercise a right under these Terms, we aren’t waiving such a right.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.5"} />
       Relationship between the Parties: Nothing in these Terms is intended to create or shall
create any partnership, joint venture, agency, consultancy, or trusteeship. You and Indigo are
independent contractors for purposes of this Term of Use.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.6"} />
            Notices: We may give notice by email to your email User Account. It is your responsibility
to ensure that the email User Account is up to date and accurate. Notices may be given and are
deemed to be received if sent to your email User Account, whether or not a notice of delivery
failure is received. You may give us notices only as we direct, which may change from time to
time. Any notice, consent, or other communication given under these Terms must be in
writing, in English, and signed.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.7"} />
          Force Majeure: We are not responsible or liable for any delay or failure to perform any
obligation as required by these Terms as a result of any cause or condition including but not
limited to, an act of God, epidemic, pandemic, acts of civil or military authorities, national or
local emergency, acts of terrorists, acts or omissions of Government including directives from a regulatory authority, civil disturbance, war, strike or other labour dispute, fire, explosion,
interruption in telecommunications or internet services or network provider services, of
equipment and/or software failure or unexpected changes in a computer network upon which
our Services rely, failure in bank performance, or any other occurrence which is beyond our
reasonable control.
            </p>
            <p className=" privacytext">
              <HighlightedSpan heading={"22.8"} />
          Third-Party Beneficiary: You agree that our third-party service providers are third-party
beneficiaries of the applicable provisions of these Terms, with all rights to enforce such
provisions as if such service providers were a party to these Terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
