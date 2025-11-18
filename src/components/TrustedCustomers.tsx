export default function TrustedCustomers() {
  const customers = [
    'Microsoft', 'Accenture', 'Deloitte', 'PwC', 'KPMG', 'EY', 'Capgemini', 'Cognizant'
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 uppercase tracking-wider text-sm font-semibold mb-12">
          Trusted by Leading Organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="text-gray-400 font-bold text-lg">{customer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
