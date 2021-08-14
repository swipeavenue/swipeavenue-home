import Image from 'next/image'


export default function Contact() {
  return (
    <div>

      <main>
        <h1 >
          Contact Us
        </h1>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/logo_transparent_background.png" alt="Swipe Avenue Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
