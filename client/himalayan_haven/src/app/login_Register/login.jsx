'use client'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Lock, Mail } from 'lucide-react'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
})

const FormikInput = ({ field, form, ...props }) => (
  <Input {...field} {...props} />
)

export function Login({ onFlip, colors }) {
  return (
    (<div className="p-8" style={{ backgroundColor: colors.warmBeige }}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold" style={{ color: colors.deepSapphireBlue }}>Login</h1>
        <p className="text-muted-foreground">Welcome back to Himalayan Haven</p>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}>
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <div className="relative">
                <Field
                  name="email"
                  component={FormikInput}
                  id="login-email"
                  type="email"
                  placeholder="john@example.com" />
                <Mail
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18} />
              </div>
              {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <div className="relative">
                <Field
                  name="password"
                  component={FormikInput}
                  id="login-password"
                  type="password" />
                <Lock
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18} />
              </div>
              {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: colors.deepSapphireBlue, color: colors.softCloudWhite }}>
              Log In
              <User className="ml-2" size={18} />
            </Button>
          </Form>
        )}
      </Formik>
      <div className="text-center mt-4">
        <Button variant="link" onClick={onFlip} style={{ color: colors.sereneTeal }}>
          Don't have an account? Sign Up
        </Button>
      </div>
    </div>)
  );
}