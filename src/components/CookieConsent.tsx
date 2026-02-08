import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_KEY = "ne-trades-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-lg shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground leading-relaxed">
              We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.{" "}
              <Link to="/cookie-policy" className="text-accent hover:underline font-medium">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={decline}>
              Decline
            </Button>
            <Button variant="cta" size="sm" onClick={accept}>
              Accept Cookies
            </Button>
          </div>
          <button
            onClick={decline}
            className="absolute top-2 right-2 md:static p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
