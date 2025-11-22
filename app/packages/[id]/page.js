import React from 'react';
import { Clock, MapPin, Hotel, Car, Users, Calendar, CheckCircle, Star, Phone, Mail, Share2, Download, Camera, Utensils, Plane, AlertCircle, Award, Shield, ThumbsUp, Globe, Headphones, CreditCard } from 'lucide-react';
import TourBookingForm from '../../components/TourBookingForm';

const PackageDetailPage = ({ params }) => {
  const packageId = params.id;

  // All package data with detailed day-by-day itineraries
  const packagesData = {
    'ella-day': {
      title: 'Ella One Day Tour',
      duration: '1 Day',
      price: 'Contact for pricing',
      mainImage: '/ninearch.jpg',
      summary: 'Experience the breathtaking beauty of Ella with its iconic Nine Arch Bridge, stunning waterfalls, and panoramic mountain views in a single day adventure.',
      days: [
        {
          day: 'Full Day Itinerary',
          title: 'Ella Highlights Tour',
          image: '/ninearch.jpg',
          activities: [
            {
              time: '07:00 AM',
              activity: 'Hotel Pickup',
              description: 'Pick up from your hotel in comfortable air-conditioned vehicle'
            },
            {
              time: '08:00 AM',
              activity: 'Nine Arch Bridge',
              description: 'Visit the iconic Nine Arch Bridge, perfect for train photography and scenic views',
              image: '/ninearch.jpg'
            },
            {
              time: '10:00 AM',
              activity: 'Little Adam\'s Peak Hike',
              description: '45-minute easy hike offering stunning panoramic views of Ella valley',
              image: '/mountain.jpg'
            },
            {
              time: '12:00 PM',
              activity: 'Lunch Break',
              description: 'Authentic Sri Lankan lunch at a local restaurant'
            },
            {
              time: '01:30 PM',
              activity: 'Ravana Falls',
              description: 'Visit the beautiful Ravana Falls, swim in natural pools (seasonal)',
              image: '/dunhida.webp'
            },
            {
              time: '03:00 PM',
              activity: 'Ella Town Exploration',
              description: 'Walk through Ella town, local shops, and viewpoints'
            },
            {
              time: '04:30 PM',
              activity: 'Return Journey',
              description: 'Drop off at your hotel'
            }
          ]
        }
      ],
      includes: [
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'Parking fees',
        'Bottled water',
        'Hotel pickup and drop off'
      ],
      notIncludes: [
        'Lunch and refreshments',
        'Entrance fees',
        'Personal expenses',
        'Gratuities'
      ]
    },
    '5d4n': {
      title: '5 Days / 4 Nights Sri Lanka Highlights',
      duration: '5 Days / 4 Nights',
      price: 'Contact for pricing',
      mainImage: '/sigiriya.jpeg',
      summary: 'Perfect introduction to Sri Lanka covering the cultural triangle, tea country, and wildlife safari in just 5 days.',
      days: [
        {
          day: 'Day 1',
          title: 'Arrival & Sigiriya',
          image: '/sigiriya.jpeg',
          activities: [
            {
              activity: 'Airport Pickup',
              description: 'Welcome to Sri Lanka! Meet your driver at arrivals',
              image: '/sigiriya.jpeg'
            },
            {
              activity: 'Transfer to Sigiriya',
              description: '3.5-hour scenic drive to Sigiriya through countryside (140 km)'
            },
            {
              activity: 'Village Safari Experience',
              description: 'Evening village tour with canoe ride and bullock cart ride',
              image: '/bagpac.jpeg'
            },
            {
              activity: 'Check-in & Dinner',
              description: 'Overnight at 3-star hotel in Sigiriya area'
            }
          ]
        },
        {
          day: 'Day 2',
          title: 'Cultural Triangle - Sigiriya & Dambulla to Kandy',
          image: '/sigiriya.jpeg',
          activities: [
            {
              activity: 'Sigiriya Rock Fortress',
              description: 'Early morning climb (1,200 steps) to see ancient frescoes and summit views',
              image: '/sigiriya.jpeg'
            },
            {
              activity: 'Dambulla Cave Temple',
              description: 'Visit UNESCO World Heritage golden cave temple with Buddha statues',
              image: '/anciant.jpeg'
            },
            {
              activity: 'Lunch en Route',
              description: 'Traditional Sri Lankan lunch'
            },
            {
              activity: 'Transfer to Kandy',
              description: '2.5-hour scenic drive through mountains (85 km)'
            },
            {
              activity: 'Kandy Cultural Dance Show',
              description: 'Evening traditional Kandyan dance performance',
              image: '/perahara.jpeg'
            },
            {
              activity: 'Overnight in Kandy',
              description: 'Stay at 3-star hotel in Kandy'
            }
          ]
        },
        {
          day: 'Day 3',
          title: 'Kandy & Tea Country',
          image: '/templeofthetooth.jpg',
          activities: [
            {
              activity: 'Temple of the Tooth',
              description: 'Visit sacred Buddhist temple housing tooth relic of Buddha',
              image: '/templeofthetooth.jpg'
            },
            {
              activity: 'Kandy Lake Walk',
              description: 'Peaceful walk around beautiful Kandy Lake'
            },
            {
              activity: 'Royal Botanical Gardens',
              description: 'Explore 147-acre garden with orchids and giant trees',
              image: '/temple.jpg'
            },
            {
              activity: 'Lunch in Kandy',
              description: 'Local restaurant meal'
            },
            {
              activity: 'Transfer to Nuwara Eliya',
              description: '2.5-hour drive through tea plantations (80 km)'
            },
            {
              activity: 'Tea Plantation & Factory Visit',
              description: 'Learn tea processing and taste Ceylon tea',
              image: '/tea.jpg'
            },
            {
              activity: 'Overnight in Nuwara Eliya',
              description: 'Stay at 3-star hotel in Little England'
            }
          ]
        },
        {
          day: 'Day 4',
          title: 'Scenic Train to Ella & Transfer to Yala',
          image: '/ninearch.jpg',
          activities: [
            {
              activity: 'Scenic Train Journey',
              description: '2.5-hour journey Nuwara Eliya to Ella (one of world\'s most beautiful train rides)',
              image: '/ninearch.jpg'
            },
            {
              activity: 'Nine Arch Bridge Visit',
              description: 'Iconic colonial-era bridge, train photography spot'
            },
            {
              activity: 'Lunch in Ella',
              description: 'Meal with mountain views'
            },
            {
              activity: 'Transfer to Yala',
              description: '3-hour drive to Yala National Park area (150 km)'
            },
            {
              activity: 'Evening Relaxation',
              description: 'Relax at hotel near Yala'
            },
            {
              activity: 'Overnight near Yala',
              description: 'Stay at 3-star hotel/safari lodge'
            }
          ]
        },
        {
          day: 'Day 5',
          title: 'Yala Safari & Departure',
          image: '/elephants.webp',
          activities: [
            {
              activity: 'Early Morning Yala Safari',
              description: '3-hour jeep safari to spot leopards, elephants, and wildlife',
              image: '/elephants.webp'
            },
            {
              activity: 'Breakfast at Hotel',
              description: 'Return for breakfast and checkout'
            },
            {
              activity: 'Transfer to Colombo Airport',
              description: '4-5 hour drive to airport (250 km)'
            },
            {
              activity: 'Departure',
              description: 'Drop off at Bandaranaike International Airport. Safe travels!'
            }
          ]
        }
      ],
      includes: [
        '4 nights accommodation (3-star hotels)',
        'Daily breakfast',
        'Private air-conditioned vehicle throughout',
        'English-speaking driver/guide',
        'Yala National Park safari with jeep',
        'Scenic train tickets (Nuwara Eliya to Ella)',
        'All entrance fees to monuments',
        'Kandy cultural dance show',
        'Village tour with activities',
        'Parking fees and highway tolls',
        'Government taxes'
      ],
      notIncludes: [
        'International flights',
        'Lunch and dinner',
        'Tips and gratuities',
        'Personal expenses',
        'Travel insurance',
        'Camera/video permits'
      ]
    },
    'haputale-day': {
      title: 'Haputale One Day Tour',
      duration: '1 Day',
      price: 'Contact for pricing',
      mainImage: '/tea.jpg',
      summary: 'Discover Haputale\'s colonial charm, world-famous Lipton\'s Seat, and breathtaking mountain vistas in this unforgettable day tour.',
      days: [
        {
          day: 'Full Day Itinerary',
          title: 'Haputale Mountain Experience',
          image: '/tea.jpg',
          activities: [
            {
              time: '05:30 AM',
              activity: 'Early Morning Pickup',
              description: 'Pick up from hotel for sunrise at Lipton\'s Seat'
            },
            {
              time: '06:30 AM',
              activity: 'Lipton\'s Seat Sunrise',
              description: 'Watch stunning sunrise over tea plantations from Sir Thomas Lipton\'s favorite viewpoint',
              image: '/tea.jpg'
            },
            {
              time: '08:00 AM',
              activity: 'Breakfast',
              description: 'Enjoy breakfast with panoramic mountain views'
            },
            {
              time: '09:30 AM',
              activity: 'Adisham Bungalow',
              description: 'Visit this beautiful colonial-era monastery and gardens',
              image: '/temple.jpg'
            },
            {
              time: '11:00 AM',
              activity: 'Dambatenne Tea Factory',
              description: 'Tour the historic tea factory established by Sir Thomas Lipton',
              image: '/tea.jpg'
            },
            {
              time: '12:30 PM',
              activity: 'Lunch',
              description: 'Traditional Sri Lankan lunch'
            },
            {
              time: '02:00 PM',
              activity: 'Haputale Town Walk',
              description: 'Explore the charming hill town and local markets'
            },
            {
              time: '03:30 PM',
              activity: 'Return Journey',
              description: 'Drop off at your hotel'
            }
          ]
        }
      ],
      includes: [
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'All entrance fees',
        'Sunrise viewpoint access',
        'Bottled water',
        'Hotel pickup and drop off'
      ],
      notIncludes: [
        'Meals',
        'Personal expenses',
        'Gratuities'
      ]
    },
    '7d6n': {
      title: '7 Days / 6 Nights Complete Sri Lanka Tour',
      duration: '7 Days / 6 Nights',
      price: 'Contact for pricing',
      mainImage: '/templeofthetooth.jpg',
      summary: 'Comprehensive tour combining cultural sites, hill country tea plantations, wildlife safari, and pristine beach relaxation.',
      days: [
        {
          day: 'Day 1',
          title: 'Arrival & Negombo Beach',
          image: '/beach.jpg',
          activities: [
            {
              activity: 'Airport Pickup',
              description: 'Welcome to Sri Lanka!',
              image: '/beach.jpg'
            },
            {
              activity: 'Transfer to Negombo',
              description: 'Short 15-minute drive to coastal town (8 km)'
            },
            {
              activity: 'Negombo Beach Walk',
              description: 'Relax on golden sands, visit fish market'
            },
            {
              activity: 'Overnight in Negombo',
              description: 'Beach hotel accommodation'
            }
          ]
        },
        {
          day: 'Day 2',
          title: 'Sigiriya & Dambulla',
          image: '/sigiriya.jpeg',
          activities: [
            {
              activity: 'Morning Transfer',
              description: 'Drive to Sigiriya (3.5 hours, 140 km)'
            },
            {
              activity: 'Sigiriya Rock Fortress',
              description: 'Climb the iconic 5th-century rock fortress',
              image: '/sigiriya.jpeg'
            },
            {
              activity: 'Lunch',
              description: 'Local restaurant'
            },
            {
              activity: 'Dambulla Cave Temple',
              description: 'Explore golden cave temples with ancient Buddha statues',
              image: '/anciant.jpeg'
            },
            {
              activity: 'Village Safari',
              description: 'Evening canoe ride and bullock cart experience'
            }
          ]
        },
        {
          day: 'Day 3',
          title: 'Kandy Cultural Experience',
          image: '/templeofthetooth.jpg',
          activities: [
            {
              activity: 'Transfer to Kandy',
              description: '2.5-hour scenic drive (85 km)'
            },
            {
              activity: 'Temple of the Tooth',
              description: 'Visit sacred Buddhist temple',
              image: '/templeofthetooth.jpg'
            },
            {
              activity: 'Royal Botanical Gardens',
              description: 'Walk through beautiful gardens',
              image: '/temple.jpg'
            },
            {
              activity: 'Kandy Cultural Show',
              description: 'Traditional dance performance',
              image: '/perahara.jpeg'
            }
          ]
        },
        {
          day: 'Day 4',
          title: 'Tea Country - Nuwara Eliya',
          image: '/tea.jpg',
          activities: [
            {
              activity: 'Scenic Drive',
              description: 'Drive through tea plantations (2.5 hours, 80 km)'
            },
            {
              activity: 'Tea Factory Visit',
              description: 'Learn tea processing and tasting',
              image: '/tea.jpg'
            },
            {
              activity: 'Gregory Lake',
              description: 'Boat ride on scenic lake'
            },
            {
              activity: 'Ramboda Falls',
              description: 'Photo stop at waterfall',
              image: '/dunhida.webp'
            }
          ]
        },
        {
          day: 'Day 5',
          title: 'Ella & Train Journey to Yala',
          image: '/ninearch.jpg',
          activities: [
            {
              activity: 'Scenic Train Ride',
              description: 'Famous Nuwara Eliya to Ella train journey',
              image: '/ninearch.jpg'
            },
            {
              activity: 'Nine Arch Bridge',
              description: 'Iconic colonial bridge'
            },
            {
              activity: 'Transfer to Yala',
              description: '3-hour drive to safari area'
            }
          ]
        },
        {
          day: 'Day 6',
          title: 'Yala Safari & Mirissa Beach',
          image: '/elephants.webp',
          activities: [
            {
              activity: 'Morning Safari',
              description: 'Spot leopards and elephants in Yala',
              image: '/elephants.webp'
            },
            {
              activity: 'Transfer to Mirissa',
              description: 'Drive to beach paradise'
            },
            {
              activity: 'Beach Relaxation',
              description: 'Enjoy golden sands',
              image: '/beach.jpg'
            }
          ]
        },
        {
          day: 'Day 7',
          title: 'Galle Fort & Departure',
          image: '/temple.jpg',
          activities: [
            {
              activity: 'Galle Fort Tour',
              description: 'UNESCO World Heritage Dutch fort',
              image: '/temple.jpg'
            },
            {
              activity: 'Transfer to Airport',
              description: '2.5-hour drive (150 km)'
            },
            {
              activity: 'Departure',
              description: 'Safe travels!'
            }
          ]
        }
      ],
      includes: [
        '6 nights accommodation (3-star hotels)',
        'Daily breakfast',
        'All private transportation',
        'Safari jeep for Yala',
        'Train tickets',
        'All entrance fees',
        'Cultural show',
        'Village experience',
        'English-speaking driver/guide'
      ],
      notIncludes: [
        'Lunch and dinner',
        'International flights',
        'Tips',
        'Personal expenses'
      ]
    },
    '10d9n': {
      title: '10 Days / 9 Nights Grand Tour',
      duration: '10 Days / 9 Nights',
      price: 'Contact for pricing',
      mainImage: '/anuradhapura.jpg',
      summary: 'Extensive exploration including ancient cities, cultural triangle, hill country, wildlife, and beaches across Sri Lanka.',
      days: [
        {
          day: 'Day 1',
          title: 'Arrival & Negombo',
          image: '/beach.jpg',
          activities: [
            { activity: 'Airport Pickup', description: 'Welcome to Sri Lanka!' },
            { activity: 'Negombo City Tour', description: 'Fish market, Dutch Canal, beach', image: '/beach.jpg' },
            { activity: 'Overnight in Negombo', description: 'Beach hotel' }
          ]
        },
        {
          day: 'Day 2',
          title: 'Anuradhapura Ancient City',
          image: '/anuradhapura.jpg',
          activities: [
            { activity: 'Transfer to Anuradhapura', description: '3-hour drive (130 km)' },
            { activity: 'Ancient City Tour', description: 'UNESCO World Heritage site - stupas, Sri Maha Bodhi tree', image: '/anuradhapura.jpg' },
            { activity: 'Overnight in Anuradhapura', description: 'City hotel' }
          ]
        },
        {
          day: 'Day 3',
          title: 'Sigiriya Rock Fortress',
          image: '/sigiriya.jpeg',
          activities: [
            { activity: 'Sigiriya Rock Climb', description: 'Early morning climb of 5th-century fortress', image: '/sigiriya.jpeg' },
            { activity: 'Pidurangala Rock Sunset', description: 'Alternative viewpoint', image: '/mountain.jpg' },
            { activity: 'Overnight in Sigiriya', description: 'Resort stay' }
          ]
        },
        {
          day: 'Day 4',
          title: 'Polonnaruwa & Dambulla',
          image: '/anciant.jpeg',
          activities: [
            { activity: 'Polonnaruwa Cycling Tour', description: 'Explore ancient ruins by bicycle', image: '/bagpac.jpeg' },
            { activity: 'Dambulla Cave Temple', description: 'Golden cave temple complex', image: '/anciant.jpeg' },
            { activity: 'Overnight in Sigiriya', description: 'Hotel stay' }
          ]
        },
        {
          day: 'Day 5',
          title: 'Kandy Cultural Heart',
          image: '/templeofthetooth.jpg',
          activities: [
            { activity: 'Transfer to Kandy', description: '2.5-hour scenic drive' },
            { activity: 'Temple of the Tooth', description: 'Sacred Buddhist temple', image: '/templeofthetooth.jpg' },
            { activity: 'Cultural Dance Show', description: 'Traditional Kandyan performance', image: '/perahara.jpeg' },
            { activity: 'Overnight in Kandy', description: 'City hotel' }
          ]
        },
        {
          day: 'Day 6',
          title: 'Tea Country - Nuwara Eliya',
          image: '/tea.jpg',
          activities: [
            { activity: 'Botanical Gardens', description: 'Royal Botanical Gardens Peradeniya', image: '/temple.jpg' },
            { activity: 'Tea Plantation Visit', description: 'Factory tour and tasting', image: '/tea.jpg' },
            { activity: 'Gregory Lake', description: 'Scenic lake activities' },
            { activity: 'Overnight in Nuwara Eliya', description: 'Hill country hotel' }
          ]
        },
        {
          day: 'Day 7',
          title: 'Scenic Train to Ella',
          image: '/ninearch.jpg',
          activities: [
            { activity: 'Train Journey', description: 'World-famous scenic train ride', image: '/ninearch.jpg' },
            { activity: 'Nine Arch Bridge', description: 'Iconic colonial bridge' },
            { activity: 'Little Adam\'s Peak', description: 'Easy sunset hike', image: '/mountain.jpg' },
            { activity: 'Overnight in Ella', description: 'Mountain guesthouse' }
          ]
        },
        {
          day: 'Day 8',
          title: 'Yala Wildlife Safari',
          image: '/elephants.webp',
          activities: [
            { activity: 'Transfer to Yala', description: '3-hour drive' },
            { activity: 'Afternoon Safari', description: 'First wildlife experience', image: '/elephants.webp' },
            { activity: 'Overnight near Yala', description: 'Safari lodge' }
          ]
        },
        {
          day: 'Day 9',
          title: 'Yala Safari & Bentota Beach',
          image: '/beach.jpg',
          activities: [
            { activity: 'Morning Safari', description: 'Best time for leopard spotting', image: '/elephants.webp' },
            { activity: 'Transfer to Bentota', description: '3-hour drive to coast' },
            { activity: 'Beach Relaxation', description: 'Golden sands and palm trees', image: '/beach.jpg' },
            { activity: 'Overnight in Bentota', description: 'Beach resort' }
          ]
        },
        {
          day: 'Day 10',
          title: 'Galle Fort & Departure',
          image: '/temple.jpg',
          activities: [
            { activity: 'Galle Fort Tour', description: 'UNESCO Dutch colonial fort', image: '/temple.jpg' },
            { activity: 'Transfer to Airport', description: '2-hour drive' },
            { activity: 'Departure', description: 'Safe travels!' }
          ]
        }
      ],
      includes: [
        '9 nights accommodation (3-4 star hotels)',
        'Daily breakfast',
        'Private vehicle throughout',
        'Two Yala safaris with jeep',
        'Train tickets',
        'Bicycle in Polonnaruwa',
        'All entrance fees',
        'Cultural shows',
        'English-speaking guide'
      ],
      notIncludes: [
        'Lunch and dinner',
        'International flights',
        'Tips and gratuities',
        'Personal expenses'
      ]
    },
    '14d13n': {
      title: '14 Days / 13 Nights Complete Island Experience',
      duration: '14 Days / 13 Nights',
      price: 'Contact for pricing',
      mainImage: '/portcity.jpg',
      summary: 'Ultimate Sri Lanka covering Cultural Triangle, Trincomalee east coast, Kandy, tea country, wildlife parks, and southern beaches.',
      days: [
        {
          day: 'Day 1-2',
          title: 'Negombo & Wilpattu Safari',
          image: '/beach.jpg',
          activities: [
            { activity: 'Negombo Exploration', description: 'Fish market, Dutch Canal, beach relaxation', image: '/beach.jpg' },
            { activity: 'Wilpattu National Park', description: 'Safari in Sri Lanka\'s largest park', image: '/elephants.webp' }
          ]
        },
        {
          day: 'Day 3-4',
          title: 'Anuradhapura & Trincomalee',
          image: '/anuradhapura.jpg',
          activities: [
            { activity: 'Anuradhapura Complete Tour', description: 'Ancient stupas, Sri Maha Bodhi tree', image: '/anuradhapura.jpg' },
            { activity: 'Koneswaram Temple', description: 'Hindu temple on cliff', image: '/temple.jpg' },
            { activity: 'Marble Beach & Nilaveli', description: 'Pristine east coast beaches', image: '/beach.jpg' },
            { activity: 'Pigeon Island Snorkeling', description: 'Optional coral reef snorkeling' }
          ]
        },
        {
          day: 'Day 5-6',
          title: 'Polonnaruwa & Sigiriya',
          image: '/sigiriya.jpeg',
          activities: [
            { activity: 'Polonnaruwa Ruins', description: 'UNESCO ancient city by bicycle', image: '/anciant.jpeg' },
            { activity: 'Minneriya Safari', description: 'Famous elephant gathering', image: '/elephants.webp' },
            { activity: 'Sigiriya Rock Climb', description: 'Iconic 5th-century fortress', image: '/sigiriya.jpeg' },
            { activity: 'Dambulla Caves', description: 'Golden cave temples' }
          ]
        },
        {
          day: 'Day 7-8',
          title: 'Kandy Cultural Capital',
          image: '/templeofthetooth.jpg',
          activities: [
            { activity: 'Temple of the Tooth', description: 'Sacred Buddhist shrine', image: '/templeofthetooth.jpg' },
            { activity: 'Royal Botanical Gardens', description: 'Beautiful gardens', image: '/temple.jpg' },
            { activity: 'Ambuluwawa Tower', description: '360-degree mountain views', image: '/mountain.jpg' },
            { activity: 'Gem Museum & Batik Workshop', description: 'Local crafts' },
            { activity: 'Cultural Dance Show', description: 'Traditional performance', image: '/perahara.jpeg' }
          ]
        },
        {
          day: 'Day 9-10',
          title: 'Hill Country Tea Estates',
          image: '/tea.jpg',
          activities: [
            { activity: 'Tea Plantation Tours', description: 'Multiple tea estates and factories', image: '/tea.jpg' },
            { activity: 'Horton Plains', description: 'World\'s End cliff viewpoint', image: '/mountain.jpg' },
            { activity: 'Scenic Train Journey', description: 'Nuwara Eliya to Ella' },
            { activity: 'Ella Complete', description: 'Nine Arch, Ella Rock, Little Adam\'s Peak', image: '/ninearch.jpg' }
          ]
        },
        {
          day: 'Day 11-12',
          title: 'Wildlife Safaris',
          image: '/elephants.webp',
          activities: [
            { activity: 'Yala Morning Safari', description: 'Leopard spotting', image: '/elephants.webp' },
            { activity: 'Udawalawe Safari', description: 'Elephant park' },
            { activity: 'Multiple Game Drives', description: 'Best wildlife viewing opportunities' }
          ]
        },
        {
          day: 'Day 13',
          title: 'South Coast Exploration',
          image: '/beach.jpg',
          activities: [
            { activity: 'Mirissa Whale Watching', description: 'Blue whale season boat trip' },
            { activity: 'Galle Fort', description: 'Historic Dutch fort', image: '/temple.jpg' },
            { activity: 'Turtle Hatchery', description: 'Conservation project' },
            { activity: 'Madu River Safari', description: 'Mangrove boat tour' },
            { activity: 'Bentota Beach', description: 'Relaxation', image: '/beach.jpg' }
          ]
        },
        {
          day: 'Day 14',
          title: 'Colombo City & Departure',
          image: '/portcity.jpg',
          activities: [
            { activity: 'Colombo City Tour', description: 'Gangaramaya Temple, Independence Square, Galle Face', image: '/portcity.jpg' },
            { activity: 'Pettah Market', description: 'Bustling bazaar' },
            { activity: 'Airport Transfer', description: 'Departure' }
          ]
        }
      ],
      includes: [
        '13 nights accommodation (3-4 star)',
        'Daily breakfast',
        'All meals in remote areas',
        'Private vehicle throughout',
        'Multiple safaris (Wilpattu, Minneriya, Yala, Udawalawe)',
        'Train tickets',
        'Boat safaris',
        'Whale watching',
        'Snorkeling equipment',
        'All entrance fees',
        'Cultural shows',
        'Village experiences',
        'Cycling equipment'
      ],
      notIncludes: [
        'Most lunches and dinners',
        'International flights',
        'Tips',
        'Personal expenses',
        'Travel insurance'
      ]
    },
    '17d16n': {
      title: '17 Days / 16 Nights Premium Sri Lanka Journey',
      duration: '17 Days / 16 Nights',
      price: 'Contact for pricing',
      mainImage: '/temple.jpg',
      summary: 'An exceptional extended journey combining cultural heritage, stunning landscapes, wildlife encounters, and coastal relaxation with carefully curated experiences.',
      days: [
        {
          day: 'Day 1-2',
          title: 'Negombo Coastal Experience',
          image: '/beach.jpg',
          activities: [
            { activity: 'Airport Pickup & Negombo', description: 'Welcome to Sri Lanka! Fish market, Dutch Canal exploration', image: '/beach.jpg' },
            { activity: 'Beach Relaxation', description: 'Golden sands and coastal walks' }
          ]
        },
        {
          day: 'Day 3-4',
          title: 'Ancient Kingdoms',
          image: '/anuradhapura.jpg',
          activities: [
            { activity: 'Anuradhapura Ancient City', description: 'UNESCO World Heritage site - stupas, Sri Maha Bodhi tree', image: '/anuradhapura.jpg' },
            { activity: 'Polonnaruwa Cycling Tour', description: 'Explore ancient ruins by bicycle', image: '/anciant.jpeg' }
          ]
        },
        {
          day: 'Day 5-6',
          title: 'Sigiriya & Cultural Triangle',
          image: '/sigiriya.jpeg',
          activities: [
            { activity: 'Sigiriya Rock Fortress', description: '5th-century fortress climb', image: '/sigiriya.jpeg' },
            { activity: 'Pidurangala Rock Sunset', description: 'Alternative viewpoint for sunset', image: '/mountain.jpg' },
            { activity: 'Dambulla Cave Temple', description: 'Golden cave temple complex', image: '/anciant.jpeg' },
            { activity: 'Minneriya Elephant Safari', description: 'Elephant gathering experience', image: '/elephants.webp' }
          ]
        },
        {
          day: 'Day 7-8',
          title: 'Kandy Cultural Heart',
          image: '/templeofthetooth.jpg',
          activities: [
            { activity: 'Pinnawala Elephant Orphanage', description: 'Elephant bathing experience', image: '/elephants.webp' },
            { activity: 'Temple of the Tooth', description: 'Sacred Buddhist temple', image: '/templeofthetooth.jpg' },
            { activity: 'Cultural Dance Show', description: 'Traditional Kandyan performance', image: '/perahara.jpeg' },
            { activity: 'Royal Botanical Gardens', description: 'Beautiful gardens and orchid collection', image: '/temple.jpg' }
          ]
        },
        {
          day: 'Day 9-10',
          title: 'Tea Country Experience',
          image: '/tea.jpg',
          activities: [
            { activity: 'Tea Plantation Tours', description: 'Multiple tea estates and factory visits', image: '/tea.jpg' },
            { activity: 'Gregory Lake Activities', description: 'Scenic lake and boat rides' },
            { activity: 'Ramboda Falls', description: 'Waterfall photo stop', image: '/dunhida.webp' },
            { activity: 'Horton Plains Trek', description: 'World\'s End cliff viewpoint (optional)', image: '/mountain.jpg' }
          ]
        },
        {
          day: 'Day 11-12',
          title: 'Ella Mountain Paradise',
          image: '/ninearch.jpg',
          activities: [
            { activity: 'Scenic Train Journey', description: 'World-famous mountain train ride', image: '/ninearch.jpg' },
            { activity: 'Nine Arch Bridge', description: 'Iconic colonial bridge photography' },
            { activity: 'Little Adam\'s Peak', description: 'Easy panoramic hike', image: '/mountain.jpg' },
            { activity: 'Ravana Falls & Cave', description: 'Waterfall exploration', image: '/dunhida.webp' }
          ]
        },
        {
          day: 'Day 13-14',
          title: 'Wildlife Safari Experience',
          image: '/elephants.webp',
          activities: [
            { activity: 'Yala National Park Safari', description: 'Full day safari for leopard spotting', image: '/elephants.webp' },
            { activity: 'Udawalawe National Park', description: 'Elephant transit home safari' }
          ]
        },
        {
          day: 'Day 15',
          title: 'South Coast Beaches',
          image: '/beach.jpg',
          activities: [
            { activity: 'Mirissa Beach', description: 'Beach relaxation and optional whale watching' },
            { activity: 'Unawatuna Beach', description: 'Golden sands and palm trees', image: '/beach.jpg' }
          ]
        },
        {
          day: 'Day 16',
          title: 'Galle Heritage & Coast',
          image: '/temple.jpg',
          activities: [
            { activity: 'Galle Fort Tour', description: 'UNESCO Dutch colonial fort exploration', image: '/temple.jpg' },
            { activity: 'Turtle Hatchery', description: 'Conservation center visit' },
            { activity: 'Madu River Safari', description: 'Mangrove boat tour' }
          ]
        },
        {
          day: 'Day 17',
          title: 'Colombo & Departure',
          image: '/portcity.jpg',
          activities: [
            { activity: 'Colombo City Tour', description: 'Gangaramaya Temple, Independence Square, Galle Face Green', image: '/portcity.jpg' },
            { activity: 'Airport Transfer', description: 'Departure - Safe travels!' }
          ]
        }
      ],
      includes: [
        '16 nights accommodation (3-4 star hotels & beach resorts)',
        'Daily breakfast & select meals',
        'Private air-conditioned vehicle throughout',
        'Professional English-speaking driver/guide',
        'Multiple wildlife safaris (Minneriya, Yala, Udawalawe)',
        'Scenic train tickets',
        'Boat safaris (Madu River)',
        'All entrance fees to monuments & parks',
        'Cultural shows',
        'Village experiences',
        'Cycling equipment',
        'Parking & highway tolls'
      ],
      notIncludes: [
        'International flights',
        'Some lunches and dinners',
        'Tips and gratuities',
        'Personal expenses',
        'Travel insurance',
        'Camera/video permits'
      ]
    },
    '21d20n': {
      title: '21 Days / 20 Nights Ultimate Sri Lanka',
      duration: '21 Days / 20 Nights',
      price: 'Contact for pricing',
      mainImage: '/beach.jpg',
      summary: 'The most comprehensive tour covering every corner of Sri Lanka from ancient kingdoms and misty mountains to wildlife adventures and coastal serenity.',
      days: [
        {
          day: 'Day 1-3',
          title: 'Negombo & Wilpattu',
          image: '/beach.jpg',
          activities: [
            { activity: 'Arrival & Beach Relaxation', description: 'Negombo fish market, Dutch Canal', image: '/beach.jpg' },
            { activity: 'Wilpattu National Park Safari', description: 'Largest national park', image: '/elephants.webp' }
          ]
        },
        {
          day: 'Day 4-6',
          title: 'Anuradhapura & Trincomalee',
          image: '/anuradhapura.jpg',
          activities: [
            { activity: 'Complete Anuradhapura Tour', description: 'UNESCO ancient city, stupas, Sri Maha Bodhi', image: '/anuradhapura.jpg' },
            { activity: 'Trincomalee Temples & Beaches', description: 'Koneswaram Temple, Fort Frederick', image: '/temple.jpg' },
            { activity: 'Marble Beach & Nilaveli', description: 'Pristine east coast', image: '/beach.jpg' },
            { activity: 'Pigeon Island Snorkeling', description: 'Coral reef exploration' }
          ]
        },
        {
          day: 'Day 7-9',
          title: 'Cultural Triangle Complete',
          image: '/sigiriya.jpeg',
          activities: [
            { activity: 'Polonnaruwa Cycling Tour', description: 'Ancient ruins exploration', image: '/anciant.jpeg' },
            { activity: 'Minneriya/Kaudulla Safari', description: 'Elephant gathering', image: '/elephants.webp' },
            { activity: 'Sigiriya Rock Climb', description: 'UNESCO World Heritage', image: '/sigiriya.jpeg' },
            { activity: 'Pidurangala Rock', description: 'Sunset viewpoint' },
            { activity: 'Village Experience', description: 'Canoe ride, bullock cart', image: '/bagpac.jpeg' },
            { activity: 'Dambulla Cave Temple', description: 'Golden caves' }
          ]
        },
        {
          day: 'Day 10-12',
          title: 'Kandy Cultural Immersion',
          image: '/templeofthetooth.jpg',
          activities: [
            { activity: 'Pinnawala Elephant Orphanage', description: 'Elephant bathing', image: '/elephants.webp' },
            { activity: 'Temple of the Tooth', description: 'Sacred relic', image: '/templeofthetooth.jpg' },
            { activity: 'Cultural Dance Shows', description: 'Traditional performances', image: '/perahara.jpeg' },
            { activity: 'Royal Botanical Gardens', description: 'Orchid collection', image: '/temple.jpg' },
            { activity: 'Kandy Lake Walk', description: 'City exploration' },
            { activity: 'Ambuluwawa Tower', description: '360° views', image: '/mountain.jpg' },
            { activity: 'Gem Museum & Batik Workshop', description: 'Local crafts' }
          ]
        },
        {
          day: 'Day 13-15',
          title: 'Hill Country Complete',
          image: '/tea.jpg',
          activities: [
            { activity: 'Tea Plantations Tours', description: 'Multiple estates', image: '/tea.jpg' },
            { activity: 'Tea Factory Visits', description: 'Processing and tasting' },
            { activity: 'Gregory Lake', description: 'Boat rides' },
            { activity: 'Ramboda Falls', description: 'Waterfall photo stop', image: '/dunhida.webp' },
            { activity: 'Horton Plains', description: 'World\'s End trek', image: '/mountain.jpg' },
            { activity: 'Haputale - Lipton\'s Seat', description: 'Sunrise viewpoint' },
            { activity: 'Dambatenne Tea Factory', description: 'Historic estate' },
            { activity: 'Adisham Bungalow', description: 'Monastery visit' }
          ]
        },
        {
          day: 'Day 16-17',
          title: 'Ella Complete Experience',
          image: '/ninearch.jpg',
          activities: [
            { activity: 'Scenic Train Journey', description: 'World-famous train ride', image: '/ninearch.jpg' },
            { activity: 'Nine Arch Bridge', description: 'Train photography' },
            { activity: 'Ella Rock Hike', description: 'Mountain summit' },
            { activity: 'Little Adam\'s Peak', description: 'Easy panoramic hike', image: '/mountain.jpg' },
            { activity: 'Ravana Falls & Cave', description: 'Waterfall exploration', image: '/dunhida.webp' }
          ]
        },
        {
          day: 'Day 18-19',
          title: 'Multiple Wildlife Safaris',
          image: '/elephants.webp',
          activities: [
            { activity: 'Yala Morning Safari', description: 'Leopard spotting', image: '/elephants.webp' },
            { activity: 'Yala Evening Safari', description: 'Second game drive' },
            { activity: 'Udawalawe Safari', description: 'Elephant park' }
          ]
        },
        {
          day: 'Day 20',
          title: 'South Coast Highlights',
          image: '/beach.jpg',
          activities: [
            { activity: 'Mirissa Whale Watching', description: 'Blue whale expedition' },
            { activity: 'Galle Fort', description: 'Dutch colonial fort', image: '/temple.jpg' },
            { activity: 'Turtle Hatchery', description: 'Conservation visit' },
            { activity: 'Madu River Safari', description: 'Mangrove boat tour' },
            { activity: 'Bentota Beach', description: 'Beach relaxation', image: '/beach.jpg' }
          ]
        },
        {
          day: 'Day 21',
          title: 'Colombo & Departure',
          image: '/portcity.jpg',
          activities: [
            { activity: 'Colombo City Tour', description: 'Gangaramaya Temple, Independence Square', image: '/portcity.jpg' },
            { activity: 'Galle Face Green', description: 'Seafront promenade' },
            { activity: 'Pettah Market', description: 'Shopping' },
            { activity: 'Airport Transfer', description: 'Departure. Safe travels!' }
          ]
        }
      ],
      includes: [
        '20 nights premium accommodation (3-4 star)',
        'Daily breakfast + all meals in remote areas',
        'Dedicated private vehicle',
        'English-speaking driver/guide',
        'All wildlife safaris (Wilpattu, Minneriya, Yala x2, Udawalawe)',
        'All scenic train tickets',
        'Boat safaris & whale watching',
        'Snorkeling equipment',
        'All entrance fees to monuments & parks',
        'Cultural shows',
        'Village experiences with activities',
        'Cycling equipment in Polonnaruwa',
        'All parking fees, tolls, taxes'
      ],
      notIncludes: [
        'International flights',
        'Some lunches and dinners',
        'Tips and gratuities',
        'Personal expenses',
        'Travel insurance',
        'Camera/video permits'
      ]
    }
  };

  const packageData = packagesData[packageId] || packagesData['5d4n'];

  return (
    <main className="pt-20">
      {/* Hero Header - Enhanced */}
      <section className="relative min-h-[500px] h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${packageData.mainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Breadcrumb */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm flex-wrap justify-center">
              <span>Home</span>
              <span>/</span>
              <span>Packages</span>
              <span>/</span>
              <span className="text-orange-400">{packageData.title}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 max-w-5xl leading-tight px-2">
            {packageData.title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl px-4">
            {packageData.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-5 md:px-7 py-2.5 sm:py-3.5 rounded-full border border-white/30 shadow-xl">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-orange-400" />
              <span className="text-white font-semibold text-xs sm:text-sm md:text-base">{packageData.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-4 sm:px-7 md:px-9 py-2.5 sm:py-3.5 rounded-full font-bold text-white shadow-2xl shadow-orange-500/60">
              <span className="text-xs sm:text-sm md:text-base">{packageData.price}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-5 md:px-7 py-2.5 sm:py-3.5 rounded-full border border-white/30 shadow-xl">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold text-xs sm:text-sm md:text-base">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-5 md:px-7 py-2.5 sm:py-3.5 rounded-full border border-white/30 shadow-xl">
              <Users className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
              <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Private Tour</span>
            </div>
          </div>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
            <a href="#booking" className="group bg-white text-orange-600 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book This Tour
            </a>
            <a href="#itinerary" className="group bg-white/10 backdrop-blur-md text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:bg-white/20 transition-all border-2 border-white/40 flex items-center gap-2">
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Itinerary
            </a>
            <button className="group bg-white/10 backdrop-blur-md text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold hover:bg-white/20 transition-all border-2 border-white/40">
              <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards - Enhanced */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 -mt-16 sm:-mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {/* Duration */}
            <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-orange-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Duration</h3>
                <p className="text-xs sm:text-sm text-orange-600 font-semibold">{packageData.duration}</p>
              </div>
            </div>

            {/* Transport */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Transport</h3>
                <p className="text-xs sm:text-sm text-blue-600 font-semibold">Private A/C</p>
              </div>
            </div>

            {/* Meals */}
            <div className="group bg-gradient-to-br from-white to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-green-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Utensils className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Meals</h3>
                <p className="text-xs sm:text-sm text-green-600 font-semibold">Breakfast Daily</p>
              </div>
            </div>

            {/* Accommodation */}
            <div className="group bg-gradient-to-br from-white to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-purple-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Hotel className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Hotels</h3>
                <p className="text-xs sm:text-sm text-purple-600 font-semibold">3-4 Star</p>
              </div>
            </div>
          </div>

          {/* Additional Quick Stats */}
          <div className="mt-4 sm:mt-6 md:mt-8 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 mb-0.5 sm:mb-1">{packageData.days?.length || '5'}+</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Days of Adventure</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1">15+</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Amazing Locations</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-0.5 sm:mb-1">100%</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Private Tours</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-0.5 sm:mb-1">4.9★</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day by Day Itinerary - Enhanced Timeline */}
      <section id="itinerary" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              <span className="text-orange-600 font-semibold text-xs sm:text-sm md:text-base">Tour Itinerary</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-4">
              Detailed Day-by-Day <span className="text-orange-500">Journey</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Every moment carefully planned for an unforgettable experience
            </p>
          </div>

          {/* Itinerary Timeline */}
          <div className="relative">
            {packageData.days.map((day, dayIdx) => (
              <div key={dayIdx} className="mb-6 sm:mb-8 md:mb-12 last:mb-0">
                {/* Timeline Dot & Line */}
                <div className="flex gap-1 sm:gap-2 md:gap-4 lg:gap-6 relative">
                  {/* Left Side - Day Number */}
                  <div className="flex-shrink-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 text-right">
                    <div className="sticky top-24">
                      <div className="inline-flex flex-col items-end">
                        <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">
                          {day.day.includes('-') ? day.day.replace('Day ', '') : String(dayIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-gray-500 font-medium">DAY</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Line */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full ring-2 sm:ring-4 ring-orange-100 relative z-10"></div>
                    {dayIdx < packageData.days.length - 1 && (
                      <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-300 to-transparent"></div>
                    )}
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 pb-4 sm:pb-6 md:pb-8">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                      {/* Day Header */}
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 sm:p-4 md:p-6 text-white">
                        <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
                          <div>
                            <p className="text-orange-100 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1">{day.day}</p>
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">{day.title}</h3>
                          </div>
                          {day.image && (
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden ring-2 sm:ring-4 ring-white/30">
                              <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-5">
                        {day.activities.map((activity, actIdx) => (
                          <div key={actIdx} className="group">
                            <div className="flex gap-2 sm:gap-3 md:gap-4">
                              {/* Activity Icon */}
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-md group-hover:scale-110 transition-transform">
                                  {actIdx + 1}
                                </div>
                              </div>

                              {/* Activity Content */}
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                                  <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    {activity.activity}
                                  </h4>
                                  {activity.time && (
                                    <span className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-orange-600 bg-orange-50 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                                      <Clock className="w-4 h-4" />
                                      {activity.time}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                  {activity.description}
                                </p>
                                
                                {/* Activity Image */}
                                {activity.image && (
                                  <div className="mt-3 sm:mt-4 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                                    <img 
                                      src={activity.image} 
                                      alt={activity.activity}
                                      className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Enhanced */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's <span className="text-orange-500">Included</span> & Not Included
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about what's covered in this tour
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Includes */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-green-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Included
                </h3>
              </div>
              <ul className="space-y-3">
                {packageData.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Includes */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-red-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Not Included
                </h3>
              </div>
              <ul className="space-y-3">
                {packageData.notIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <span className="text-red-600 text-sm font-bold">✕</span>
                      </div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Important Information</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  All tours are customizable to suit your preferences. Contact us to modify the itinerary, upgrade accommodations, or add additional activities. Prices may vary based on group size and season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-semibold">Why Choose J Tours</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Experience The <span className="text-orange-500">Difference</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for unforgettable Sri Lankan adventures
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Expert Local Guides</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Professional English-speaking guides with deep knowledge of Sri Lankan culture and history
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Fully licensed and insured vehicles with experienced drivers for your safety and comfort
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Best Value</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Competitive pricing with no hidden costs. Best price guarantee on all our tour packages
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Fully Customizable</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Tailor every aspect of your tour to match your preferences, interests, and budget
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Round-the-clock customer support before, during, and after your tour
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-yellow-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Flexible Payment</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Multiple payment options with secure transactions and flexible cancellation policy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Got <span className="text-orange-500">Questions?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about this tour
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-start gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm mt-0.5">?</span>
                  <span>Is this a private tour or group tour?</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 ml-8 sm:ml-9 leading-relaxed">
                  This is a completely private tour with your own vehicle and driver. You'll have the flexibility to customize the itinerary and travel at your own pace without joining a group.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-start gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm mt-0.5">?</span>
                  <span>What type of accommodation is included?</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 ml-8 sm:ml-9 leading-relaxed">
                  We provide comfortable 3-4 star hotels with breakfast included. You can upgrade to luxury 5-star hotels for an additional cost. All accommodations are carefully selected for quality and location.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-start gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm mt-0.5">?</span>
                  <span>Can I customize the itinerary?</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 ml-8 sm:ml-9 leading-relaxed">
                  Absolutely! This itinerary is flexible and can be customized to match your interests. Contact us to modify destinations, add activities, or adjust the duration to suit your preferences.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-start gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm mt-0.5">?</span>
                  <span>What is your cancellation policy?</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 ml-8 sm:ml-9 leading-relaxed">
                  We offer flexible cancellation up to 7 days before the tour for a full refund. Cancellations within 7 days may incur charges. Please contact us for detailed terms and conditions.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-start gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm mt-0.5">?</span>
                  <span>Are entrance fees and activities included?</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 ml-8 sm:ml-9 leading-relaxed">
                  Most entrance fees to monuments and national parks are included. Specific activities like hot air balloon rides or additional safaris can be added for an extra cost. Please check the "What's Included" section above for details.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Note */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="#booking" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
              <Mail className="w-5 h-5" />
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900">WhatsApp</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Quick response via WhatsApp</p>
              <a href="https://wa.me/94703206081" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700">
                Chat Now →
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Send us your inquiry</p>
              <a href="mailto:j.tours.rent@gmail.com" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-sm">
                Send Email →
              </a>
            </div>

            {/* Call */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900">Call Us</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Speak with our team</p>
              <a href="tel:+94771234567" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 text-sm">
                Call Now →
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="text-orange-600 font-semibold">Book Your Adventure</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Ready to Start Your <span className="text-orange-500">Journey?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our travel experts will get back to you within 24 hours with a personalized quote
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
              <TourBookingForm />
            </div>

            {/* Trust Badges */}
            <div className="mt-10 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
              <p className="text-center text-gray-700 font-semibold mb-6 text-lg">
                🎉 Book with Confidence
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Headphones className="w-7 h-7 text-green-600" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">24/7 Support</span>
                  <span className="text-xs text-gray-600 mt-1">Always here to help</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Best Price</span>
                  <span className="text-xs text-gray-600 mt-1">Guaranteed lowest rate</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-7 h-7 text-purple-600" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Instant Confirm</span>
                  <span className="text-xs text-gray-600 mt-1">Quick response</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-orange-600" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Top Rated</span>
                  <span className="text-xs text-gray-600 mt-1">4.9/5 reviews</span>
                </div>
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="mt-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-900 font-bold text-lg mb-1">4.9 out of 5</p>
              <p className="text-gray-600 text-sm">Based on 500+ verified reviews</p>
              <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-gray-600">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">⭐ Excellent Service</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">👍 Professional Guides</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">🚗 Comfortable Vehicles</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Generate static params for all package IDs
export async function generateStaticParams() {
  return [
    { id: 'ella-day' },
    { id: 'haputale-day' },
    { id: '5d4n' },
    { id: '7d6n' },
    { id: '10d9n' },
    { id: '14d13n' },
    { id: '17d16n' },
    { id: '21d20n' }
  ];
}

export default PackageDetailPage;
