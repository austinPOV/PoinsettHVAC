# HVAC Image Updates - Complete

All images have been updated to use authentic HVAC-related photos showing real technicians working on heating and air conditioning equipment.

## Updated Image Mapping

### Service Images
All service cards now use authentic HVAC photos:

1. **AC Installation & Repair**
   - Photo ID: 32497161
   - Shows: HVAC technician working on outdoor AC unit
   - URL: `https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg`

2. **Cooling Systems Maintenance**
   - Photo ID: 6471913
   - Shows: Technician servicing HVAC unit with diagnostic tools
   - URL: `https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg`

3. **Heating & Furnace Service**
   - Photo ID: 5463581
   - Shows: Technician working on rooftop HVAC unit
   - URL: `https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg`

4. **Preventative Maintenance Plans**
   - Photo ID: 17602538
   - Shows: Row of commercial HVAC units installed on building
   - URL: `https://images.pexels.com/photos/17602538/pexels-photo-17602538.jpeg`

5. **Commercial HVAC**
   - Photo ID: 17602538
   - Shows: Multiple commercial AC units on building exterior
   - URL: `https://images.pexels.com/photos/17602538/pexels-photo-17602538.jpeg`

6. **Emergency 24/7 Repairs**
   - Photo ID: 32497161
   - Shows: Professional HVAC technician at work
   - URL: `https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg`

### Blog Post Featured Images

1. **Filter maintenance post**: Photo 6471913 (technician with tools)
2. **AC replacement post**: Photo 32497161 (outdoor unit service)
3. **Maintenance guide**: Photo 5463581 (rooftop service)

### Team Member Photos

1. **John Anderson (Owner)**: Photo 32497161 (professional technician)
2. **Mike Stevens (Technician)**: Photo 5463581 (technician at work)

### Page Hero Images

- **Home page hero background**: Photo 32497161 (10% opacity overlay)
- **About page company photo**: Photo 32497161
- **Emergency service section**: Photo 6471913
- **SEO default image**: Photo 32497161

## Photo Details

All photos are from Pexels (royalty-free, commercial use allowed) and show:

- **Photo 32497161**: Male HVAC technician in grey polo working on residential Carrier AC unit
- **Photo 5463581**: Technician on rooftop servicing commercial HVAC equipment with tools
- **Photo 6471913**: Close-up of technician with pressure gauge/diagnostic equipment servicing AC unit
- **Photo 17602538**: Row of Carrier commercial AC condensers installed on building exterior

## Files Modified

1. `/src/lib/data.ts` - All service imageUrl and featuredImage properties
2. `/src/pages/Home.tsx` - Hero background and emergency section images
3. `/src/pages/About.tsx` - Company story section image
4. `/src/components/SEO.tsx` - Default OG image and schema image
5. `/index.html` - Added preconnect for Pexels CDN

## Image Optimization Notes

All images are loaded from Pexels CDN which provides:
- Automatic WebP conversion
- Responsive image sizing
- Global CDN delivery
- Optimized compression

For production, consider:
1. Downloading images locally for better control
2. Creating responsive image variants
3. Adding lazy loading attributes
4. Implementing blur-up placeholders
5. Converting to WebP format locally

## Build Status

✅ All images updated successfully
✅ TypeScript compilation clean
✅ Production build ready (265KB JS, 22KB CSS)
✅ All image URLs use authentic HVAC content
