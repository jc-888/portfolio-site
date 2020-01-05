import * as React from "react"
import { Formik, FormikActions, FormikProps, Form } from "formik"
import * as Yup from "yup"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from "./style"

interface MyFormValues {
  subject: string
  message: string
}

const SignupSchema = Yup.object().shape({
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
})

const ContactPage: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ subject: "", message: "" }}
      onSubmit={(
        values: MyFormValues,
        actions: FormikActions<MyFormValues>
      ) => {
        window.location.href = `mailto:jaconjcondes@gmail.com?subject=${values.subject}&body=${values.message.replace(/\n/g, '%0D%0A')}`;
        actions.setSubmitting(false);
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Contact</h2>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="subject"
                    value={`${values.subject}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Subject"
                    notification={`${
                      errors.subject && touched.subject
                        ? errors.subject
                        : ""
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Message"
                  notification={
                    errors.message && touched.message ? errors.message : ""
                  }
                />
                <Button
                  title="Submit"
                  type="submit"
                  isLoading={isSubmitting ? true : false}
                  loader="Submitting.."
                />
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  )
}

export default ContactPage
