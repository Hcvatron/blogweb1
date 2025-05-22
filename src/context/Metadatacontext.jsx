import React, { createContext, useContext, useState, useEffect } from "react";

// Initialize the context
const MetadataContext = createContext();

// Metadata Provider
export const MetadataProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({
    default: {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
    },
  });

  const setProductMetadata = (productId) => {
    const productMetadata = {
      "mcafee": {
        title: "McAfee Antivirus",
        description: "Protect your devices with McAfee Antivirus.",
        keywords: "McAfee, antivirus, security",
      },
      "norton": {
        title: "Norton Antivirus",
        description: "Keep your devices safe with Norton Antivirus.",
        keywords: "Norton, antivirus, security",
      },
      // Add other products here...
    };

    setMetadata((prevMetadata) => ({
      ...prevMetadata,
      [productId]: productMetadata[productId] || prevMetadata.default,
    }));
  };

  return (
    <MetadataContext.Provider value={{ metadata, setProductMetadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

// Custom hook to use metadata context
export const useMetadata = () => useContext(MetadataContext);
