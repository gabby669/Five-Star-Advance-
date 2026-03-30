import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FiveStarAdvance() {
  const [revenue, setRevenue] = useState(50000);
  const [advance, setAdvance] = useState(0);

  const calculateAdvance = () => {
    const estimate = revenue * 0.8;
    setAdvance(estimate);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Five Star Advance</h1>
        <nav className="space-x-6">
          <a href="#services">Services</a>
          <a href="#calculator">Calculator</a>
          <a href="#iso">ISO Partners</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold mb-4">
          Get Approved for Business Funding in 24 Hours
        </motion.h2>
        <p className="mb-6">Fast approvals. High limits. Reliable funding partner.</p>
        <Button className="bg-white text-blue-700">Apply Now</Button>
      </section>

      {/* Services */}
      <section id="services" className="py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl text-center font-bold mb-10">Funding Solutions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Merchant Cash Advances",
            "Revenue-Based Financing",
            "Bridge Funding"
          ].map((s, i) => (
            <Card key={i}><CardContent className="p-6">{s}</CardContent></Card>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Funding Calculator</h3>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="p-3 border rounded-xl"
        />
        <div className="mt-4">
          <Button onClick={calculateAdvance}>Estimate</Button>
        </div>
        {advance > 0 && (
          <p className="mt-4 text-xl">Estimated Advance: ${advance.toLocaleString()}</p>
        )}
      </section>

      {/* ISO Page */}
      <section id="iso" className="py-16 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">ISO / Broker Partnerships</h3>
        <p className="mb-6">We work with top ISO shops offering fast approvals, high commissions, and aggressive funding.</p>
        <ul className="mb-6 space-y-2">
          <li>• Same-day approvals</li>
          <li>• Up to 14-point payouts</li>
          <li>• Dedicated account managers</li>
        </ul>
        <Button>Become a Partner</Button>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl text-center font-bold mb-10">Apply Now</h3>
        <div className="grid gap-4">
          <input placeholder="Business Name" className="p-3 border rounded-xl" />
          <input placeholder="Monthly Revenue" className="p-3 border rounded-xl" />
          <input placeholder="Phone" className="p-3 border rounded-xl" />
          <textarea placeholder="Funding Needs" className="p-3 border rounded-xl" />
          <Button>Submit Application</Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">*Form can be connected to CRM, webhook, or DocuSign</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © {new Date().getFullYear()} Five Star Advance
      </footer>
    </div>
  );
}
