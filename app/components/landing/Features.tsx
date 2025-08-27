"use client";

import { Bookmark, Bell, Sparkles, FileText, Mic } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <section>
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Built for Power Readers in mind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to conquer your newsletter backlog and retain
            what matters.
          </p>
        </div>

        {/*
          Main Features Grid
          - Mobile (default): `grid-cols-1`. All items stack vertically.
          - Desktop (lg): `lg:grid-cols-2`. We create a 2-column layout.
            - The first item (Sidebar) gets `lg:row-span-2`, making it take up two rows in the first column.
            - The grid auto-populates the remaining items, achieving the desired layout.
        */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* --- SIDEBAR (Spans 2 rows on desktop) --- */}
          <div className="flex flex-col rounded-custom border border-gray-200 bg-card-gray p-5 lg:row-span-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              <p className="font-semibold text-foreground">Organize</p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Organize Newsletters like a Pro
            </h3>
            <p className="mt-1.5 text-muted-foreground">
              Effortlessly organize your subscriptions with unmatched
              simplicity.
            </p>
            {/* The image container grows to fill the extra vertical space provided by row-span-2 */}
            <div className="mt-4 flex flex-grow items-center justify-center rounded-custom bg-background p-4">
              <Image
                src="/landing/sidebar_demo.png"
                alt="Organize feature with a tall sidebar view"
                width={300}
                height={700}
                className="h-auto w-full max-w-[280px] rounded-custom object-contain"
              />
            </div>
          </div>

          {/* --- IMAGE 1 --- */}
          <div className="relative flex flex-col rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              <p className="font-semibold text-foreground">Connect</p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              All your newsletter in one place
            </h3>
            <div className="mt-4 flex flex-grow items-center justify-center rounded-custom bg-background p-4">
              <Image
                src="/landing/image_demo.png"
                alt="Connect Feature"
                width={500}
                height={300}
                className="h-auto w-full max-w-xs rounded-custom object-contain"
              />
            </div>
          </div>

          {/* --- IMAGE 2 --- */}
          <div className="relative flex flex-col rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              <p className="font-semibold text-foreground">AI Assistant</p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Summarize with one click
            </h3>
            <div className="mt-4 flex flex-grow items-center justify-center rounded-custom bg-background p-4">
              <Image
                src="/landing/image_demo.png"
                alt="AI Assistant Feature"
                width={500}
                height={300}
                className="h-auto w-full max-w-xs rounded-custom object-contain"
              />
            </div>
          </div>

          {/* --- IMAGE 3 --- */}
          <div className="relative flex flex-col rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              <p className="font-semibold text-foreground">
                Discover Newsletter
              </p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Expand your knowledge
            </h3>
            <div className="mt-4 flex flex-grow items-center justify-center rounded-custom bg-background p-4">
              <Image
                src="/landing/image_demo.png"
                alt="Discover Newsletter Feature"
                width={500}
                height={300}
                className="h-auto w-full max-w-xs rounded-custom object-contain"
              />
            </div>
          </div>

          {/* --- IMAGE 4 --- */}
          <div className="relative flex flex-col rounded-custom border border-gray-200 bg-card-gray p-5">
            <span className="absolute right-4 top-4 rounded-full border border-gray-200 bg-background px-3 py-1 text-xs font-semibold">
              Coming Soon
            </span>
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              <p className="font-semibold text-foreground">Mobile App</p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Anywhere and Everywhere
            </h3>
            <div className="mt-4 flex flex-grow items-center justify-center rounded-custom bg-background p-4">
              <Image
                src="/landing/image_demo.png"
                alt="Mobile App Feature"
                width={500}
                height={300}
                className="h-auto w-full max-w-xs rounded-custom object-contain"
              />
            </div>
          </div>
        </div>

        {/*
          Bottom Small Feature Cards
          - Mobile: `grid-cols-2` as requested.
          - Desktop: `lg:grid-cols-4` to align correctly with the 2x2 grid structure above it.
        */}
        <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {/* Card 1: Bookmarks */}
          <div className="rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="inline-block rounded-custom bg-primary/10 p-2">
              <Bookmark className="size-5 text-primary" />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">Bookmarks</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>

          {/* Card 2: Highlights & Notes */}
          <div className="rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="inline-block rounded-custom bg-primary/10 p-2">
              <FileText className="size-5 text-primary" />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">
              Highlights & Notes
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>

          {/* Card 3: Text-to-Speech */}
          <div className="rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="inline-block rounded-custom bg-primary/10 p-2">
              <Mic className="size-5 text-primary" />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">
              Text-to-Speech
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>

          {/* Card 4: Custom Notification */}
          <div className="rounded-custom border border-gray-200 bg-card-gray p-5">
            <div className="inline-block rounded-custom bg-primary/10 p-2">
              <Bell className="size-5 text-primary" />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">
              Custom Notification
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Custom notifications when your favorite newsletters drop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
