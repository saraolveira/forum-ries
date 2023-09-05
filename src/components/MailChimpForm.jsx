import MailchimpSubscribe from "react-mailchimp-subscribe"
import { useTranslation } from 'react-i18next'

const url = 'https://clustersaude.us14.list-manage.com/subscribe/post?u=727a0f385b0f51695986ee5f5&id=e1f8a2a0c8'

// const SimpleForm = () => <MailchimpSubscribe url={url}/>

const CustomForm = ({ status, message, onValidated }) => {

    const { t } = useTranslation()

    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });
  
    return (
      <div className="mailchimp-form"
        // style={{
        //   background: "#efefef",
        //   borderRadius: 2,
        //   padding: 10,
        //   display: "inline-block"
        // }}
      >
        <h3>{t('mailchimp.subscribe')}</h3> 
        <input
          ref={node => (name = node)}
          type="text"
          placeholder={t('mailchimp.name')}
        />
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
        />
        <button className="cta" onClick={submit}>
            {t('mailchimp.send')}
        </button>
        {status === "sending" && <div>{t('mailchimp.sending')}...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    )
  }

const MailChimpForm = () => {
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    )
}

export default MailChimpForm