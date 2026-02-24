import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const platforms = [
  // Short-form & social
  { name: "TikTok", logo: "https://images.seeklogo.com/logo-png/34/2/tiktok-logo-png_seeklogo-340606.png" },
  { name: "Instagram", logo: "https://images.seeklogo.com/logo-png/43/2/instagram-new-2022-logo-png_seeklogo-438252.png" },
  { name: "YouTube", logo: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" },
  { name: "Facebook", logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" },
  { name: "Snapchat", logo: "https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo.png" },
  { name: "X", logo: "https://images.seeklogo.com/logo-png/49/2/twitter-new-logo-png_seeklogo-492388.png" },
  { name: "LinkedIn", logo: "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" },

  // Music & audio
  { name: "Spotify", logo: "https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" },
  { name: "Apple Music", logo: "https://images.seeklogo.com/logo-png/46/2/apple-music-logo-png_seeklogo-461016.png" },

  // Marketplaces & creator platforms
  { name: "Etsy", logo: "https://images.seeklogo.com/logo-png/29/2/etsy-logo-png_seeklogo-296234.png" },
  { name: "Amazon", logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" },
  { name: "Pinterest", logo: "https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png" },
  { name: "Shopify", logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" },
  { name: "Substack", logo: "https://seeklogo.com/images/S/substack-logo-F6B5685F4D-seeklogo.com.png" },
  { name: "OnlyFans", logo: "https://seeklogo.com/images/O/onlyfans-logo-3C0C7D3F7C-seeklogo.com.png" },

  // Payments / infra
  { name: "Stripe", logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png" },
  { name: "M-Pesa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png" },

  // Generic financial institutions
  { name: "Bank", isIcon: true },
];

export function TrustedBySection() {
  return (
    <section className="bunifu-section border-b border-border bg-background">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center">
            Creative income lives across{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">platforms</span>
          </h2>

          <div className="relative w-full overflow-hidden mt-4">
            <div className="flex items-center gap-10 logo-scroll">
              {[...platforms, ...platforms].map((platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  {platform.isIcon ? (
                    <Building2 className="h-10 w-10 text-foreground/60" />
                  ) : (
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-foreground/70 text-center max-w-2xl mt-6">
            Bunifu Capital connects to those platforms. Data is unified into one{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-semibold">financial profile</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

