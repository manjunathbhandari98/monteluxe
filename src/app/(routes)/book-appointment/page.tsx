"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Info,
} from "lucide-react";
import Button from "@/components/custom/Button";
import Hero from "@/components/appointments/Hero";

const BookAppointment: React.FC = () => {
  const [selectedDate, setSelectedDate] =
    useState("");
  const [selectedTime, setSelectedTime] =
    useState("");
  const [selectedBoutique, setSelectedBoutique] =
    useState("");

  const boutiques = [
    {
      id: "delhi",
      name: "Delhi Flagship Boutique",
      address:
        "Khan Market, New Delhi, Delhi 110003",
      hours: "11:00 AM - 8:00 PM",
      image:
        "https://images.pexels.com/photos/9709793/pexels-photo-9709793.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      id: "mumbai",
      name: "Mumbai Colaba Boutique",
      address:
        "Colaba Causeway, Mumbai, Maharashtra 400005",
      hours: "11:00 AM - 8:30 PM",
      image:
        "https://images.pexels.com/photos/6740105/pexels-photo-6740105.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      id: "bangalore",
      name: "Bangalore UB City Boutique",
      address:
        "UB City, Vittal Mallya Road, Bengaluru, Karnataka 560001",
      hours: "10:30 AM - 8:00 PM",
      image:
        "https://images.pexels.com/photos/2577275/pexels-photo-2577275.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div className="space-y-8">
              <div className="bg-background-darker rounded-lg p-8 border border-luxury-gold/10">
                <h2 className="font-serif text-2xl mb-6">
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="email"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 pl-10 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="tel"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 pl-10 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background-darker rounded-lg p-8 border border-luxury-gold/10">
                <h2 className="font-serif text-2xl mb-6">
                  Appointment Details
                </h2>
                <div className="space-y-6">
                  {/* Boutique Selection */}
                  <div>
                    <label className="block text-sm mb-4">
                      Select Boutique
                    </label>
                    <div className="grid grid-cols-1 gap-4">
                      {boutiques.map(
                        (boutique) => (
                          <button
                            key={boutique.id}
                            onClick={() =>
                              setSelectedBoutique(
                                boutique.id
                              )
                            }
                            className={`p-4 rounded border text-left transition-all ${
                              selectedBoutique ===
                              boutique.id
                                ? "border-luxury-gold bg-luxury-gold/10"
                                : "border-text-muted/30 hover:border-luxury-gold/50"
                            }`}
                          >
                            <p className="font-medium">
                              {boutique.name}
                            </p>
                            <p className="text-text-muted text-sm mt-1">
                              {boutique.address}
                            </p>
                            <p className="text-text-muted text-sm mt-1">
                              Hours:{" "}
                              {boutique.hours}
                            </p>
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm mb-2">
                      Select Date
                    </label>
                    <div className="relative">
                      <Calendar
                        size={16}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) =>
                          setSelectedDate(
                            e.target.value
                          )
                        }
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 pl-10 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm mb-4">
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() =>
                            setSelectedTime(time)
                          }
                          className={`p-2 rounded border text-center text-sm transition-all ${
                            selectedTime === time
                              ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                              : "border-text-muted/30 hover:border-luxury-gold/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your interests or any specific timepieces you'd like to view..."
                      className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                    ></textarea>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="large"
                className="text-black font-serif font-semibold"
              >
                Confirm Appointment
              </Button>
            </div>

            {/* Information Panel */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div className="bg-background-darker rounded-lg p-8 border border-luxury-gold/10">
                <h2 className="font-serif text-2xl mb-6">
                  What to Expect
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Users className="text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">
                        Personal Consultation
                      </h3>
                      <p className="text-text-muted">
                        Our expert consultants
                        will guide you through our
                        collection, helping you
                        find the perfect
                        timepiece.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">
                        Duration
                      </h3>
                      <p className="text-text-muted">
                        Each appointment is
                        scheduled for 1 hour,
                        ensuring ample time to
                        explore our collection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">
                        Private Viewing Room
                      </h3>
                      <p className="text-text-muted">
                        Experience our timepieces
                        in an exclusive,
                        comfortable setting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-luxury-gold/5 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Info className="text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-luxury-gold mb-2">
                      Important Information
                    </h3>
                    <ul className="text-text-muted space-y-2 text-sm">
                      <li>
                        • Appointments must be
                        scheduled at least 24
                        hours in advance
                      </li>
                      <li>
                        • Please arrive 5-10
                        minutes before your
                        scheduled time
                      </li>
                      <li>
                        • Bring a valid
                        government-issued photo ID
                      </li>
                      <li>
                        • Cancellations should be
                        made at least 12 hours
                        before the appointment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Selected Boutique Preview */}
              {selectedBoutique && (
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={
                      boutiques.find(
                        (b) =>
                          b.id ===
                          selectedBoutique
                      )?.image
                    }
                    alt="Boutique"
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
