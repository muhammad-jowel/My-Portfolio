import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'



const footerLink = [
  {
    title: 'GitHub',
    href: 'https://github.com/muhammad-jowel'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-jowel/'
  },
  {
    title: 'FaceBook',
    href: 'https://www.facebook.com/softdevjowel'
  },
  {
    title: 'WhatsApp',
    href: 'https://wa.me/966534496202'
  },
]


export const Footer = () => {
  return (
    <footer className='relative z-10 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-6'>
          <div className='text-white/40'>&copy; 2024 Muhammad Jowel. All Rights Reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-6'>
            {
              footerLink.map((link) => (
                <a key={link.title} href={link.href} className='inline-flex items-center gap-1.5 hover:text-emerald-300 duration-700 cursor-pointer' target='_blank'
                rel='noopener noreferrer'>
                  <span className='font-semibold'>{link.title}</span>
                  <ArrowUpRight className='size-4' />
                </a>
              ))
            }
          </nav>
        </div>
      </div>
    </footer>
  );
};
