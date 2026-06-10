import { useState } from "react";
import { FadeSection } from "./components/FadeSection";
import Sidebar from "./components/SideBar";
import HashConverter from "./containers/HashConverter";
import DocumentDownloader from "./containers/DocumentDownloader";
import UuidGenerator from "./containers/UuidGenerator";
import CustomCard from "./components/CustomCard";
import Header from "./components/Header";
import { DocumentTextIcon, LockClosedIcon, ShieldCheckIcon, HashtagIcon } from "@heroicons/react/24/outline";
import EncodeDecode from "./containers/EncodeDecode";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const features = [
    {
      key: "documents",
      title: "Document Downloader",
      description: "Generates templates with pre-filled fields.",
      icon: DocumentTextIcon,
    },
    {
      key: "hash",
      title: "Hash Converter",
      description: "Converts any text into different hash functions.",
      icon: LockClosedIcon,
    },
    {
      key: "id",
      title: "UUID Generator",
      description: "Generates unique UUIDs.",
      icon: ShieldCheckIcon,
    },
    {
      key: "encode",
      title: "Test Encoder / Decoder",
      description: "Encodes and decodes text using Base64 and URL encoding.",
      icon: HashtagIcon,
    },
  ];

  return (
    <div className={`h-screen flex flex-col overflow-hidden transition-colors duration-300
                      ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      <Header
        setSelectedPage={setSelectedPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className={`flex flex-1 text-white overflow-hidden ${darkMode ? "bg-gray-800" : "bg-amber-50"}`}>
        <Sidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          darkMode={darkMode}
        />

        <div className="flex flex-col flex-1">
          <div className={`h-[1px] ${darkMode ? "bg-blue-800" : "bg-gray-300"}`} />
          <main
            className={`flex-1 items-center justify-center p-8 ${selectedPage === "" ? "" : "flex"}`}
          >
            {!selectedPage && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {features.map((feature) => (
                  <FadeSection key={feature.key}>
                    <CustomCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      onClick={() => setSelectedPage(feature.key)}
                      darkMode={darkMode}
                    />
                  </FadeSection>
                ))}
              </div>
            )}

            {selectedPage === "documents" && (
              <FadeSection>
                <DocumentDownloader darkMode={darkMode} />
              </FadeSection>
            )}

            {selectedPage === "hash" && (
              <FadeSection>
                <HashConverter darkMode={darkMode} />
              </FadeSection>
            )}

            {selectedPage === "id" && (
              <FadeSection>
                <UuidGenerator darkMode={darkMode} />
              </FadeSection>
            )}

            {selectedPage === "encode" && (
              <FadeSection>
                <EncodeDecode darkMode={darkMode} />
              </FadeSection>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
