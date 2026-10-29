
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      id="Contact"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="mx-auto flex w-full max-w-5xl flex-col
        items-center gap-12 px-4 py-16
        sm:gap-14 sm:px-6 sm:py-20
        md:min-h-screen md:flex-row md:gap-8
        md:px-6 md:py-12 lg:gap-10"
    >
      {/* Contact Information */}
      <motion.div
        className="flex w-full min-w-0 flex-1
          flex-col gap-5 px-2 text-center
          sm:px-4 md:text-left"
      >
        <motion.h1
          className="section-title w-full text-4xl font-bold
            leading-tight sm:text-5xl
            md:text-5xl lg:text-6xl"
        >
          Let's work together
        </motion.h1>

        <motion.div className="space-y-1">
          <h2 className="font-semibold">Mail</h2>
          <a
            href="mailto:sudipto1294@gmail.com"
            className="break-words text-sm font-light
              transition-colors hover:text-[#42b4cd]
              sm:text-base"
          >
            sudipto1294@gmail.com
          </a>
        </motion.div>

        <motion.div className="space-y-1">
          <h2 className="font-semibold">Address</h2>
          <span className="text-sm font-light sm:text-base">
            Dhaka, Bangladesh
          </span>
        </motion.div>

        <motion.div className="space-y-1">
          <h2 className="font-semibold">Phone number</h2>
          <a
            href="tel:01794197740"
            className="text-sm font-light
              transition-colors hover:text-[#42b4cd]
              sm:text-base"
          >
            01794197740
          </a>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="relative mx-auto w-full min-w-0
          max-w-[550px] flex-1 px-1
          sm:px-3 md:px-0"
      >
        {/* Animated Phone SVG */}
        <motion.div
          className="pointer-events-none absolute inset-0
            z-0 flex items-center justify-center
            overflow-hidden stroke-[#1f2667e6]"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            className="h-auto w-full max-w-[400px]"
            viewBox="0 0 32.666 32.666"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
              M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
              C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
              c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
              c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
              c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
              c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
              c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
              c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
              c-0.832.195-1.727.227-2.516.553c-0.134.057-.238.16-.359.24c-2.799,1.774-3.16,6.082-.428,9.292c1.041,1.228,2.127,2.416,3.245,3.576l-0.006.004
              c0.031.031.063.06.095.09c0.03.031.059.062.088.095l0.006-.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
              C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>

        {/* Form */}
        <motion.form
          action="https://formspree.io/f/xyzjzvvg"
          method="POST"
          id="form"
          className="relative z-10 flex w-full
            min-w-0 flex-col gap-3 rounded-xl
            border border-edge bg-white/90 p-5 shadow-xl
            backdrop-blur-sm
            dark:border-white/10 dark:bg-[#11151ccc]
            sm:gap-4 sm:p-8
            md:p-6 lg:p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <input
            className="w-full min-w-0 rounded-md
              border border-[#6bd3d3] bg-white
              px-3 py-3 text-sm text-black
              outline-none transition
              placeholder:text-gray-500
              focus:ring-2 focus:ring-[#42b4cd]
              sm:text-base"
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="name"
            aria-label="Your name"
            required
          />

          <input
            className="w-full min-w-0 rounded-md
              border border-[#6bd3d3] bg-white
              px-3 py-3 text-sm text-black
              outline-none transition
              placeholder:text-gray-500
              focus:ring-2 focus:ring-[#42b4cd]
              sm:text-base"
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            aria-label="Your email"
            required
          />

          <textarea
            className="w-full min-w-0 resize-y
              rounded-md border border-[#6bd3d3]
              bg-white px-3 py-3 text-sm
              text-black outline-none transition
              placeholder:text-gray-500
              focus:ring-2 focus:ring-[#42b4cd]
              sm:text-base"
            name="message"
            placeholder="Message"
            rows={5}
            aria-label="Your message"
            required
          />

          <button
            id="btn"
            type="submit"
            className="btn-primary relative w-full sm:py-3.5"
          >
            Submit
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
