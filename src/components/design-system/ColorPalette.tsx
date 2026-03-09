export function ColorPalette() {
  const colorGroups = [
    {
      title: "Primary Blues",
      colors: [
        { name: "Kontron Blue", var: "--kontron-blue", hex: "#005083" },
        { name: "Blue Dark", var: "--kontron-blue-dark", hex: "#003d64" },
        { name: "Blue Darker", var: "--kontron-blue-darker", hex: "#002a46" },
        { name: "Blue Light", var: "--kontron-blue-light", hex: "#4d8cb1" },
        { name: "Blue Lighter", var: "--kontron-blue-lighter", hex: "#99b8cf" },
        { name: "Blue Pale", var: "--kontron-blue-pale", hex: "#e5f0f6" },
      ],
    },
    {
      title: "Primary Greens",
      colors: [
        { name: "Kontron Green", var: "--kontron-green", hex: "#3FB498" },
        { name: "Green Dark", var: "--kontron-green-dark", hex: "#2f8a73" },
        { name: "Green Darker", var: "--kontron-green-darker", hex: "#1f5d4d" },
        { name: "Green Light", var: "--kontron-green-light", hex: "#6fcdb4" },
        {
          name: "Green Lighter",
          var: "--kontron-green-lighter",
          hex: "#9fddc9",
        },
        { name: "Green Pale", var: "--kontron-green-pale", hex: "#e6f7f3" },
      ],
    },
    {
      title: "Neutrals",
      colors: [
        { name: "Dark", var: "--kontron-dark", hex: "#050316" },
        { name: "Gray Dark", var: "--kontron-gray-dark", hex: "#4d4d4d" },
        { name: "Gray", var: "--kontron-gray", hex: "#808080" },
        { name: "Gray Light", var: "--kontron-gray-light", hex: "#b3b3b3" },
        { name: "Gray Lighter", var: "--kontron-gray-lighter", hex: "#e6e6e6" },
        { name: "White", var: "--kontron-white", hex: "#ffffff" },
      ],
    },
    {
      title: "Complementary Colors",
      colors: [
        { name: "Magenta", var: "--kontron-magenta", hex: "#E4007F" },
        {
          name: "Magenta Light",
          var: "--kontron-magenta-light",
          hex: "#f266af",
        },
        {
          name: "Magenta Pale",
          var: "--kontron-magenta-pale",
          hex: "#f9ecf4",
        },
        { name: "Cyan", var: "--kontron-cyan", hex: "#00BCD4" },
        { name: "Cyan Light", var: "--kontron-cyan-light", hex: "#66d9e8" },
        { name: "Cyan Pale", var: "--kontron-cyan-pale", hex: "#e6f7f3" },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {colorGroups.map((group) => (
        <div key={group.title}>
          <h3 className="ds-section-title text-xl mb-4">{group.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {group.colors.map((color) => (
              <div key={color.var} className="space-y-2">
                <div
                  className="h-24 rounded-lg shadow-sm"
                  style={{ backgroundColor: `var(${color.var})` }}
                />
                <div className="text-sm">
                  <p className="font-medium">{color.name}</p>
                  <p className="text-muted-foreground text-xs">{color.hex}</p>
                  <p className="text-muted-foreground text-xs font-mono">
                    {color.var}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Gradients */}
      <div>
        <h3 className="ds-section-title text-xl mb-4">Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div
              className="h-32 rounded-lg shadow-md"
              style={{ background: "var(--kontron-gradient-linear)" }}
            />
            <div className="text-sm">
              <p className="font-medium">Linear Gradient</p>
              <p className="text-muted-foreground text-xs">
                135deg, Blue to Green
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="h-32 rounded-lg shadow-md"
              style={{ background: "var(--kontron-gradient-diagonal)" }}
            />
            <div className="text-sm">
              <p className="font-medium">Diagonal Gradient</p>
              <p className="text-muted-foreground text-xs">
                45deg, Blue to Green
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
