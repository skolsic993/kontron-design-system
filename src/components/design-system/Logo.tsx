import kontronLogo from "@/assets/kontron_logo.svg";
import smallLogo from "@/assets/small_logo.svg";

export function Logo() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="ds-section-title text-xl mb-4">
          Brand Logo
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Use the full Kontron logo on larger viewports and the compact mark
            on small screens.
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-24 rounded-lg shadow-sm flex items-center justify-center">
              <img
                src={kontronLogo}
                alt="Kontron full logo"
                className="h-10 w-auto max-w-full object-contain"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium">Full logo (md and up)</p>

              <p className="text-muted-foreground text-xs font-mono">
                --kontron-blue & --kontron-green
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-24 rounded-lg shadow-sm flex items-center justify-center">
              <img
                src={smallLogo}
                alt="Kontron compact mark"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium"> Compact mark (below md)</p>

              <p className="text-muted-foreground text-xs font-mono">
                --kontron-blue & --kontron-green
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
