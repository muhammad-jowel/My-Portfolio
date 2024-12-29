import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Henry Daniel",
    position: "Marketing Manager",
    text: "Jowel enhanced my website perfectly! And the experience was fantastic. His communication was exceptional. He quickly understood my needs during our meeting, And he delivered exactly what I needed. Highly recommend his services!",
    avatar: memojiAvatar1,
  },
  {
    name: "Elena Parry",
    position: "Head of Company",
    text: "Always very satisfied by his team’s work, professional and very responsible. I already used their services several times and I can say that they do a really good job.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO InnovateCo",
    text: "Md Jowel is one of most responsible person I've ever worked with on Fiverr. He delivers on time and even before the deadline. I recommend to those who wants to receive a professional delivery order. Great Job Md Jowel!",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager GlobalTech",
    text: "It's already the 3rd order I do, Md Jowel is doing a great job: fast, consistent and sticked to the requirements. I will definitely continue to work with him.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT MegaCorp",
    text: "The seller was excellent, asked exact requirements, was very accomodating, and helped me obtain my results by the deadline. I am very thankful!",
    avatar: memojiAvatar5,
  },
  {
    name: "Michael Brown",
    position: "Writer of Justice",
    text: "Md Jowel is very professional and very responsible for his work. I really appreciate the work flow and I will definitely look for his services again. Thank you!",
    avatar: memojiAvatar1,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-10 lg:py-20" id="testimonial">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Client"
          title="What Clients Say about Me"
          description="Don’t just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-5 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="size-24 max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
