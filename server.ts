import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import multer from "multer";
import { Resend } from "resend";
import dotenv from "dotenv";
import { newsEvents } from "./src/lib/newsData.js";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize Resend with API Key
// Using the key provided by the user directly to ensure it's active
const resend = new Resend("re_R2CAwyEV_3vwXSPXNpBzbEvq9pJKTPvZL");

// Configure Multer for file uploads (in-memory storage for simplicity)
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

async function startServer() {
  app.use(express.json());

  // API Route: Support Ticket Submission
  app.post("/api/support", upload.array("files"), async (req, res) => {
    try {
      const { name, email, company, designation, subject, description, priority, criticality, ticketType } = req.body;
      const uploadedFiles = req.files as Express.Multer.File[];

      // Construct the email content with TIM Branding
      const priorityColors: Record<string, { bg: string, text: string }> = {
        'sev1': { bg: '#fee2e2', text: '#991b1b' }, // Critical
        'sev2': { bg: '#ffedd5', text: '#9a3412' }, // High
        'sev3': { bg: '#dbeafe', text: '#1e40af' }, // Medium
        'sev4': { bg: '#f1f5f9', text: '#475569' }  // Low
      };
      
      const pColor = priorityColors[priority?.toLowerCase()] || { bg: '#f1f5f9', text: '#475569' };

      const formatLabel = (val: string) => {
        if (!val) return 'N/A';
        return val.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      };

      const emailHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="background-color: #00021a; padding: 30px; text-align: center;">
            <img src="https://marketing.timcorp.net.ph/hubfs/website/TIM%20Logo%20%5Bhorizontal%5D%20white.png" alt="TIM Corporation" style="height: 50px; margin-bottom: 10px;">
            <div style="color: #60a5fa; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">Support Terminal</div>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
              <h2 style="margin: 0; color: #0f172a; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Support Ticket</h2>
              <div style="display: flex; gap: 8px;">
                <span style="background-color: ${pColor.bg}; color: ${pColor.text}; padding: 6px 12px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                  ${priority ? formatLabel(priority) : 'No Priority'}
                </span>
                ${ticketType ? `
                <span style="background-color: #f0f9ff; color: #0369a1; padding: 6px 12px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                  ${formatLabel(ticketType)}
                </span>` : ''}
              </div>
            </div>
            
            <div style="margin-bottom: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Requester Details</div>
                <div style="color: #1e293b; font-size: 16px;"><strong>${name}</strong></div>
                <div style="color: #64748b; font-size: 14px;">${email}</div>
                <div style="color: #64748b; font-size: 14px; margin-top: 4px;">${designation} @ ${company}</div>
              </div>
              <div>
                <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Classification</div>
                <div style="color: #1e293b; font-size: 14px;"><strong>Criticality:</strong> ${criticality ? formatLabel(criticality) : 'N/A'}</div>
                <div style="color: #1e293b; font-size: 14px;"><strong>Type:</strong> ${ticketType ? formatLabel(ticketType) : 'N/A'}</div>
              </div>
            </div>

            <div style="background-color: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
              <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Ticket Subject</div>
              <div style="color: #0f172a; font-size: 18px; font-weight: 700; margin-bottom: 15px;">${subject}</div>
              
              <div style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Description</div>
              <div style="color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${description}</div>
            </div>

            <div style="text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #0009af; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; transition: background-color 0.2s;">Reply to Requester</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
              This is an automated notification from the <strong>TIM Support Terminal</strong>.<br>
              © 2026 TIM Corporation. All rights reserved.
            </p>
          </div>
        </div>
      `;

      // Prepare attachments for Resend
      const attachments = uploadedFiles?.map(file => ({
        filename: file.originalname,
        content: file.buffer.toString('base64'),
      })) || [];

      // Send the email using Resend
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev", 
        to: ["cesar.asis@timcorp.net.ph"],
        subject: `[SUPPORT TICKET] ${priority?.toUpperCase() || 'NORMAL'} | ${criticality?.toUpperCase() || 'N/A'}: ${subject}`,
        html: emailHtml,
        attachments: attachments,
      });

      if (error) {
        console.error("Resend Error Details:", JSON.stringify(error, null, 2));
        return res.status(400).json({ 
          error: "Failed to send email via Resend.",
          details: error
        });
      }

      res.json({ success: true, message: "Ticket submitted and email sent successfully." });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ error: "An unexpected error occurred on the server." });
    }
  });

  let vite: any = null;
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
  }

  // Intercept NewsEvents requests to dynamically inject Open Graph tags (e.g. cover image)
  app.get("/NewsEvents", async (req, res, next) => {
    try {
      const eventId = req.query.id as string | undefined;
      const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
      const requestUrl = `${protocol}://${req.get('host')}${req.originalUrl}`;
      
      let htmlPath = "";
      let isDev = process.env.NODE_ENV !== "production";
      
      if (isDev) {
        htmlPath = path.join(process.cwd(), "index.html");
      } else {
        htmlPath = path.join(process.cwd(), "dist", "index.html");
      }

      if (!fs.existsSync(htmlPath)) {
        return next();
      }

      let html = fs.readFileSync(htmlPath, "utf-8");

      if (isDev && vite) {
        html = await vite.transformIndexHtml(req.originalUrl, html);
      }

      const event = eventId ? newsEvents.find(e => e.id === eventId) : null;
      
      let title = "TIM Corp | Welcome";
      let description = "Total Information Management Corporation (TIM) is a leading Filipino technology solutions provider.";
      let imageUrl = "https://marketing.timcorp.net.ph/hubfs/logo/TIM%20Logo%20only.png";
      
      if (event) {
        title = `${event.title} | TIM Corp News & Events`;
        description = event.content.replace(/\s+/g, ' ').substring(0, 200).trim() + "...";
        imageUrl = event.image;
      }
      
      const metaTags = `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${requestUrl}" />
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:image" content="${imageUrl}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${requestUrl}" />
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${imageUrl}" />
      `;
      
      if (event) {
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${title.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>`);
      }

      const injectedHtml = html.replace("</head>", `${metaTags}\n  </head>`);
      res.setHeader("Content-Type", "text/html");
      return res.send(injectedHtml);
    } catch (err) {
      console.error("Error serving NewsEvents with meta tags:", err);
      next(err);
    }
  });

  if (process.env.NODE_ENV !== "production") {
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
