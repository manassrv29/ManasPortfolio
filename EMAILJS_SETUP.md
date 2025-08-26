# 📧 EmailJS Setup Guide for Contact Form

Your contact form is now ready to send emails! Follow these steps to set up EmailJS and make it fully functional.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection steps for your chosen service
5. **Copy the Service ID** (e.g., `service_abc1234`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. **Template Variables to include:**
   - `from_name`
   - `from_email` 
   - `subject`
   - `message`
   - `reply_to`

5. **Copy the Template ID** (e.g., `template_xyz5678`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcDEF123ghiJKL`)

### 5. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Replace the placeholder values with your actual EmailJS credentials.**

### 6. Update Contact Component (Optional)
If you want to hardcode the values instead of using environment variables, edit `components/contact.tsx` lines 32-34:

```typescript
const serviceId = 'your_actual_service_id'
const templateId = 'your_actual_template_id'  
const publicKey = 'your_actual_public_key'
```

## 🧪 Testing Your Contact Form

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the contact section** of your portfolio

3. **Fill out the form** with test data

4. **Submit the form** - you should see:
   - Loading spinner while sending
   - Success message if sent successfully
   - Error message if something went wrong

5. **Check your email** (the one connected to EmailJS service)

## 🎯 Expected Email Format

When someone submits your contact form, you'll receive an email like:

```
Subject: New Portfolio Contact: [Their Subject]

From: [Their Name]
Email: [Their Email]
Subject: [Their Subject]

Message:
[Their Message]

---
This message was sent from your portfolio contact form.
Reply directly to: [Their Email]
```

## 🔧 Troubleshooting

### Common Issues:

1. **"EmailJS error" in console:**
   - Check your Service ID, Template ID, and Public Key
   - Ensure your email service is properly connected
   - Verify template variables match exactly

2. **Form submits but no email received:**
   - Check your spam folder
   - Verify the email service is active in EmailJS dashboard
   - Test the template directly in EmailJS dashboard

3. **CORS errors:**
   - EmailJS should work from localhost and deployed sites
   - Add your domain to allowed origins in EmailJS settings

### Free Plan Limits:
- **200 emails/month** on free plan
- **Upgrade to paid plan** for higher limits if needed

## 🚀 Deployment Notes

Your contact form will work on:
- ✅ **Vercel** (recommended)
- ✅ **Netlify**
- ✅ **GitHub Pages**
- ✅ **Any static hosting**

The environment variables will be automatically included in the build.

## 📞 Alternative Contact Methods

If users can't send emails through the form, they can still reach you via:
- **Direct Email:** manassrv29@gmail.com
- **LinkedIn:** [Your LinkedIn Profile]
- **Phone:** +91-9829149265

---

**Your contact form is now professional and fully functional! 🎉**
