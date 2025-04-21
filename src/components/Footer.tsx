"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/anti-discrimination" className="text-xs text-gray-600 hover:text-gray-900">
                  Anti Discrimination Policy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-xs text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* For customers */}
          <div>
            <h3 className="text-sm font-bold mb-4">For customers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-xs text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/register-complaint" className="text-xs text-gray-600 hover:text-gray-900">
                  Register complaint
                </Link>
              </li>
              <li>
                <Link href="/near-me" className="text-xs text-gray-600 hover:text-gray-900">
                  Explore near you
                </Link>
              </li>
            </ul>
          </div>

          {/* For partners */}
          <div>
            <h3 className="text-sm font-bold mb-4">For partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register" className="text-xs text-gray-600 hover:text-gray-900">
                  Register as professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-bold mb-4">Social links</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/UrbanCompany" className="text-gray-600 hover:text-gray-900">
                <Facebook size={16} />
              </Link>
              <Link href="https://twitter.com/urbancompany" className="text-gray-600 hover:text-gray-900">
                <Twitter size={16} />
              </Link>
              <Link href="https://www.instagram.com/urbancompany" className="text-gray-600 hover:text-gray-900">
                <Instagram size={16} />
              </Link>
              <Link href="https://www.linkedin.com/company/urbancompany" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={16} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCjNJe0jgLP257X9LsSkmqnA" className="text-gray-600 hover:text-gray-900">
                <Youtube size={16} />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-xs text-gray-500">
          <p>© Copyright 2024 Urban Company. All Rights reserved. {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
