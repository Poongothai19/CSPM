const dashboardData =  {
    categories: [
      {
        id: "cspm",
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            id: "cloud-accounts",
            name: "Cloud Accounts",
            content: {
              type: "donut",
              total: 2,
              segments: [
                { name: "Connected", value: 2, color: "#4285f4" },
                { name: "Not Connected", value: 2, color: "#e8eaed" }
              ]
            }
          },
          {
            id: "cloud-risk",
            name: "Cloud Account Risk Assessment",
            content: {
              type: "donut",
              total: 9659,
              segments: [
                { name: "Failed", value: 1869, color: "#ea4335" },
                { name: "Warning", value: 981, color: "#fbbc04" },
                { name: "Not available", value: 46, color: "#fbbc04" },
                { name: "Passed", value: 7253, color: "#34a853" }
              ]
            }
          }
        ]
      },
      {
        id: "cwpp",
        name: "CWPP Dashboard",
        widgets: [
          {
            id: "namespace-alerts",
            name: "Top 5 Namespace Specific Alerts",
            content: {
              type: "no-data",
              message: "No Graph data available!"
            }
          },
          {
            id: "workload-alerts",
            name: "Workload Alerts",
            content: {
              type: "no-data",
              message: "No Graph data available!"
            }
          }
        ]
      },
      {
        id: "registry",
        name: "Registry Scan",
        widgets: [
          {
            id: "image-risk",
            name: "Image Risk Assessment",
            content: {
              type: "progress",
              total: 1470,
              label: "Total Vulnerabilities",
              segments: [
                { name: "Critical", value: 0, color: "#ea4335" },
                { name: "High", value: 150, color: "#ff8800" },
                { name: "Medium", value: 500, color: "#fbbc04" },
                { name: "Low", value: 820, color: "#34a853" }
              ]
            }
          },
          {
            id: "image-security",
            name: "Image Security Issues",
            content: {
              type: "progress",
              total: 2,
              label: "Total Images",
              segments: [
                { name: "Critical", value: 2, color: "#ea4335" },
                { name: "High", value: 2, color: "#ff8800" },
                { name: "Medium", value: 4, color: "#fbbc04" },
                { name: "Low", value: 0, color: "#34a853" }
              ]
            }
          }
        ]
      }
    ]
  };
  
  // Get all widgets across all categories
  function getAllWidgets() {
    const allWidgets 
export default dashboardData;