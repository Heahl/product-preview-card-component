import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Preview Card</title>
        <meta name="description" content="product-preview-card-component" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-cream">
        {/* Preview Card Container */}
        <div className="scro flex h-[92vh] w-[90vw] flex-col overflow-hidden rounded-2xl bg-white md:h-[60vh] md:min-h-[620px] md:w-[80vw] md:min-w-[700px] md:flex-row">
          {/* Product Image */}
          <Image
            className="block w-full md:hidden"
            src="/images/image-product-mobile.jpg"
            width={100}
            height={100}
            alt="Product-Image"
          />
          <Image
            className="hidden h-full w-[50%] md:block"
            src="/images/image-product-desktop.jpg"
            width={100}
            height={100}
            alt="Product-Image"
          />
          {/* Content Container */}
          <div className="flex h-full w-full flex-col gap-4 overflow-auto p-8 md:justify-between md:overflow-hidden">
            <p className="font-montserrat text-md font-bold tracking-widest text-dark-grayish-blue">
              P E R F U M E
            </p>
            <h1 className="font-fraunces text-5xl">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="font-montserrat my-2 text-xl leading-8 tracking-wide text-dark-grayish-blue ">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex w-full flex-row items-center gap-8">
              <h2 className="font-fraunces text-5xl text-dark-cyan">$149.99</h2>
              <span className="font-montserrat my-6 text-lg text-dark-grayish-blue line-through">
                $169.99
              </span>
            </div>
            <button className="font-montserrat mt-2 flex max-h-24 w-full flex-row content-center justify-center gap-8 rounded-2xl bg-dark-cyan py-6 text-lg font-bold text-white hover:bg-emerald-800">
              <Image
                src="/images/icon-cart.svg"
                alt="Shopping-Cart-Icon"
                width={24}
                height={24}
              />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
