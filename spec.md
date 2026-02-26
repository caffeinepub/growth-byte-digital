# Specification

## Summary
**Goal:** Fix the Growth Byte Digital logo not displaying correctly in the Navbar, Footer, HeroSection, and AboutSection.

**Planned changes:**
- Save the Growth Byte Digital logo as a static asset at `frontend/public/assets/generated/logo.png`
- Fix `Navbar.tsx` to display the logo at 48px height using the correct public path with `object-fit: contain`
- Fix `Footer.tsx` to display the logo at 60px height using the correct public path with `object-fit: contain`
- Fix `HeroSection.tsx` to display the logo at an appropriate larger size with `object-fit: contain`
- Fix `AboutSection.tsx` to display the logo with glow effect intact and `object-fit: contain`
- Ensure all `<img>` tags use `src="/assets/generated/logo.png"` and `alt="Growth Byte Digital"`

**User-visible outcome:** The Growth Byte Digital logo is visible and undistorted in the Navbar, Footer, HeroSection, and AboutSection with no broken image icons anywhere on the page.
