import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import awsLogo from '../../assets/images/ProductLogos/aws.png';

const AWSServices = () => {
  const serviceData = {
    title: "Amazon Web Services (AWS)",
    subtitle: "Comprehensive AWS Cloud Solutions",
    description: "Leverage the power of AWS cloud infrastructure with our comprehensive services. From EC2 and S3 to advanced AI/ML and serverless solutions, we help you build, deploy, and scale applications on the world's most comprehensive cloud platform.",
    logo: awsLogo,
    heroGradient: "linear-gradient(135deg, #ff9900 0%, #ff6600 100%)",
    
    stats: [
      { number: "150+", label: "AWS Deployments" },
      { number: "99.99%", label: "Availability" },
      { number: "45%", label: "Cost Savings" }
    ],

    services: [
      {
        title: "AWS Compute Services",
        description: "Scalable compute capacity with EC2, Lambda, and container services for any workload requirement.",
        features: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "Amazon EKS", "AWS Batch", "AWS Fargate"]
      },
      {
        title: "AWS Storage & Database",
        description: "Comprehensive storage and database solutions from S3 object storage to managed databases.",
        features: ["Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon EBS", "Amazon EFS", "Amazon Redshift"]
      },
      {
        title: "AWS Networking & Security",
        description: "Secure and scalable networking with VPC, CloudFront, and comprehensive security services.",
        features: ["Amazon VPC", "AWS CloudFront", "AWS WAF", "AWS Shield", "AWS IAM", "AWS KMS"]
      },
      {
        title: "AWS DevOps & Automation",
        description: "Complete DevOps toolchain with CodePipeline, CloudFormation, and infrastructure automation.",
        features: ["AWS CodePipeline", "AWS CloudFormation", "AWS CodeBuild", "AWS CodeDeploy", "AWS Systems Manager", "AWS Config"]
      },
      {
        title: "AWS AI/ML & Analytics",
        description: "Advanced AI/ML services and big data analytics for intelligent business insights.",
        features: ["Amazon SageMaker", "AWS Comprehend", "Amazon Kinesis", "AWS Glue", "Amazon QuickSight", "AWS EMR"]
      },
      {
        title: "AWS Monitoring & Management",
        description: "Comprehensive monitoring and management tools for optimal AWS performance and governance.",
        features: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Cost Explorer", "AWS Trusted Advisor", "AWS Organizations", "AWS Control Tower"]
      }
    ],

    benefits: [
      {
        title: "Global Infrastructure",
        description: "Deploy applications across 80+ availability zones in 25+ geographic regions worldwide."
      },
      {
        title: "Pay-as-you-Scale",
        description: "Only pay for what you use with flexible pricing models and cost optimization tools."
      },
      {
        title: "Enterprise Security",
        description: "Bank-level security with 300+ security, compliance, and governance services."
      },
      {
        title: "Innovation Speed",
        description: "Accelerate innovation with 200+ fully featured services and rapid deployment capabilities."
      }
    ],

    process: [
      {
        step: "01",
        title: "AWS Assessment",
        description: "Evaluate your current infrastructure and identify optimal AWS services for your needs."
      },
      {
        step: "02",
        title: "AWS Architecture",
        description: "Design scalable, secure, and cost-effective AWS architecture tailored to your requirements."
      },
      {
        step: "03",
        title: "AWS Migration",
        description: "Execute seamless migration to AWS with minimal downtime and business disruption."
      },
      {
        step: "04",
        title: "AWS Optimization",
        description: "Continuous optimization for performance, security, and cost efficiency across all AWS services."
      }
    ],

    technologies: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "AWS Lambda",
      "Amazon EKS",
      "AWS CloudFormation",
      "Amazon CloudWatch",
      "AWS IAM"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default AWSServices;