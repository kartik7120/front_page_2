import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-y-5'>
        <p className='text-4xl font-bold'>Welcome to PopX</p>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className='flex flex-col gap-y-6 items-center'>
          <button type="button" className='h-12 text-center w-full text-white bg-[#6C25FF] border border-transparent overflow-hidden rounded-lg'>Create Account</button>
          <button type="button" className='h-12 text-black w-full bg-[#6C25FF4B] border border-transparent overflow-hidden rounded-lg'>
            Already Registered? Login
          </button>
        </div>
      </div>
    </main>
  )
}
