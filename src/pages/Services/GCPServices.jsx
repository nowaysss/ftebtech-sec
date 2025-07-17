import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import gcpLogo from '../../assets/images/ProductLogos/googlecloud.png'; // Updated to use the correct GCP logo

const GCPServices = () => {
  const serviceData = {
    title: "Google Cloud Platform (GCP)",
    subtitle: "Advanced Google Cloud Solutions",
    description: "Harness the power of Google's infrastructure with comprehensive GCP services. From Compute Engine to cutting-edge AI/ML capabilities, we help you build, deploy, and scale applications on Google's secure and innovative cloud platform.",
    logo: gcpLogo,
    heroGradient: "linear-gradient(135deg, #4285f4 0%, #34a853 50%, #ea4335 100%)",
    
    stats: [
      { number: "100+", label: "GCP Projects" },
      { number: "99.95%", label: "Uptime SLA" },
      { number: "50%", label: "Performance Boost" }
    ],

    services: [
      {
        title: "Google Compute Services",
        description: "Scalable virtual machines and container services powered by Google's global infrastructure.",
        features: ["Compute Engine", "Google Kubernetes Engine", "Cloud Functions", "App Engine", "Cloud Run", "Batch"]
      },
      {
        title: "Google Storage & Databases",
        description: "Comprehensive data storage and database solutions from Cloud Storage to BigQuery analytics.",
        features: ["Cloud Storage", "Cloud SQL", "Firestore", "BigQuery", "Cloud Bigtable", "Cloud Spanner"]
      },
      {
        title: "Google AI & Machine Learning",
        description: "Industry-leading AI/ML services including AutoML, TensorFlow, and pre-trained models.",
        features: ["Vertex AI", "AutoML", "TensorFlow", "Vision AI", "Natural Language AI", "Translation AI"]
      },
      {
        title: "Google Networking & Security",
        description: "Global networking infrastructure with advanced security and identity management.",
        features: ["VPC Networks", "Cloud CDN", "Cloud Armor", "Identity & Access Management", "Cloud KMS", "Security Command Center"]
      },
      {
        title: "Google DevOps & CI/CD",
        description: "Complete DevOps toolchain with Cloud Build, deployment manager, and monitoring.",
        features: ["Cloud Build", "Cloud Deploy", "Cloud Source Repositories", "Deployment Manager", "Cloud Monitoring", "Cloud Logging"]
      },
      {
        title: "Google Data Analytics",
        description: "Advanced data analytics and business intelligence with BigQuery and Data Studio.",
        features: ["BigQuery", "Dataflow", "Dataproc", "Data Studio", "Looker", "Pub/Sub"]
      }
    ],

    benefits: [
      {
        title: "Google Innovation",
        description: "Access to the same infrastructure that powers Google Search, YouTube, and Gmail."
      },
      {
        title: "Sustainable Cloud",
        description: "Carbon-neutral cloud with commitment to 100% renewable energy and sustainability."
      },
      {
        title: "Advanced AI/ML",
        description: "Industry-leading AI and machine learning capabilities with TensorFlow and AutoML."
      },
      {
        title: "Global Network",
        description: "Premium global network with 140+ network edge locations for optimal performance."
      }
    ],

    process: [
      {
        step: "01",
        title: "GCP Assessment",
        description: "Analyze your requirements and identify optimal Google Cloud services for your use case."
      },
      {
        step: "02",
        title: "GCP Design",
        description: "Architect scalable and secure GCP solutions leveraging Google's best practices."
      },
      {
        step: "03",
        title: "GCP Implementation",
        description: "Deploy and migrate to Google Cloud with minimal disruption and maximum efficiency."
      },
      {
        step: "04",
        title: "GCP Optimization",
        description: "Continuous optimization for performance, cost, and innovation using Google Cloud tools."
      }
    ],

    technologies: [
      "Compute Engine",
      "Google Kubernetes Engine",
      "Cloud Storage",
      "BigQuery",
      "Vertex AI",
      "Cloud Functions",
      "Cloud Monitoring",
      "Cloud IAM"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default GCPServices;