import { FocusCards } from "../ui/focus-cards";
import EventManagement from '../../assets/EventManagement.jpg'
import Ground_Reacher from '../../assets/Ground_Reacher.jpg'
import Media from '../../assets/Media.jpg'
import Public_Relations from '../../assets/Public_Relations.jpg'
import Filed_Work from '../../assets/Filed_Work.jpg'
import SocialMedia from '../../assets/SocialMedia.jpg'
export function FocusCardsDemo() {
  const cards = [
    {
      title: "Event Management",
      src:EventManagement,
    },
    {
      title: "Press Coverage",
      src: Media,
    },
    {
      title: "Social Media Campaign",
      src: SocialMedia,
    },
    {
      title: "Public Relations",
      src: Public_Relations,
    },
    {
      title: "Field Work ",
      src: Filed_Work,
    },
    {
      title: "Ground Research ",
      src:Ground_Reacher ,
    },
  ];

  return(
     <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Work in <span className="text-yellow-500">Action</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A glimpse of the impactful moments we've created for our clients.
          </p>
        </div>

        
        <FocusCards cards={cards} />
      </div>
    </section>

  )
}
