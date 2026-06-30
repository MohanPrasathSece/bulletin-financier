export const submitToCRM = async (data: { [key: string]: string }) => {
  const CRM_API_URL = import.meta.env.VITE_CRM_API_URL;
  const CRM_API_TOKEN = import.meta.env.VITE_CRM_API_TOKEN;

  if (!CRM_API_URL || !CRM_API_TOKEN) {
    throw new Error("CRM configuration missing");
  }

  const fullName = (data.name || "").trim();
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "Unknown";
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Lead";

  let phone = (data.phone || "").replace(/[^0-9+]/g, '');
  if (phone) {
    if (phone.startsWith('+')) {
      phone = '00' + phone.slice(1);
    }
    if (phone.startsWith('41') && phone.length === 11) {
      phone = '00' + phone;
    }
    if (!phone.startsWith('0041')) {
      if (phone.startsWith('0') && !phone.startsWith('00')) {
        phone = '0041' + phone.slice(1);
      } else if (!phone.startsWith('00')) {
        phone = '0041' + phone;
      }
    }
  } else {
    phone = "0000000000";
  }

  const payload = {
    country_name: "ch",
    description: data.message || "Signup Lead",
    phone: phone,
    email: data.email,
    first_name: firstName,
    last_name: lastName,
    custom_fields: {
      Source_ID: "website",
      How_Much_Invested: data.amount || "0",
      Outline_Your_Case: data.message || ""
    }
  };

  const response = await fetch(CRM_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": CRM_API_TOKEN
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("CRM Error:", text);
    throw new Error("Failed to submit to CRM");
  }

  return { success: true };
};
