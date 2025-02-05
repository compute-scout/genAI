'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  dob: string;
  spouseName?: string;
  fatherName: string;
  motherName: string;
  gender: string;
  address: string;
  accountNumber: string;
  accountHolderName: string;
  bankName: string;
  bankBranchName: string;
  ifsc: string;
  passportPhoto?: FileList;
  aadharFront?: FileList;
  aadharBack?: FileList;
  secondaryCert?: FileList;
  seniorSecondaryCert?: FileList;
  graduationCert?: FileList;
  cancelledCheque?: FileList;
  resume?: FileList;
}

export default function UserForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setSubmittedData(data);
  };

  return (
<div className=" bg-white  overflow-auto" style={{ height: 'calc(100vh - 4rem)' }}>
<h2 className="font-semibold  h-36 flex items-center pl-7 text-2xl text-white bg-blue-500 ">Personal Details</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
        {/* Personal Details */}
        <div className="grid grid-cols-2 gap-4">
          <input {...register('firstName', { required: true })} placeholder="First Name" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('lastName', { required: true })} placeholder="Last Name" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('mobile', { required: true })} type="tel" placeholder="Mobile Number" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('email', { required: true })} type="email" placeholder="Email ID" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('dob', { required: true })} type="date" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('spouseName')} placeholder="Spouse Name (Optional)" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('fatherName', { required: true })} placeholder="Father's Name" className="border rounded-lg border-blue-500 p-2 w-full" />
          <input {...register('motherName', { required: true })} placeholder="Mother's Name" className="border rounded-lg border-blue-500 p-2 w-full" />
        </div>

        {/* Gender Selection */}
        <h3 className="font-semibold">Gender</h3>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input {...register('gender', { required: true })} type="radio" value="Male" className="mr-2" />
            Male
          </label>
          <label className="flex items-center">
            <input {...register('gender', { required: true })} type="radio" value="Female" className="mr-2" />
            Female
          </label>
          <label className="flex items-center">
            <input {...register('gender', { required: true })} type="radio" value="Other" className="mr-2" />
            Other
          </label>
        </div>

        {/* Address */}
        <h3 className="font-semibold">Complete Address</h3>
        <textarea {...register('address', { required: true })} placeholder="Enter your full address" className="border p-2 w-full h-20"></textarea>

        {/* Document Upload */}
        <h3 className="font-semibold">Upload Documents</h3>
<div className="grid grid-cols-2 gap-4">
  <div>
    <label className="block">Passport Photo:</label>
    <input {...register('passportPhoto')} type="file" accept="image/*" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Aadhar Card (Front):</label>
    <input {...register('aadharFront')} type="file" accept="image/*,application/pdf" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Aadhar Card (Back):</label>
    <input {...register('aadharBack')} type="file" accept="image/*,application/pdf" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Secondary School Certificate:</label>
    <input {...register('secondaryCert')} type="file" accept="image/*,application/pdf" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Senior Secondary School Certificate:</label>
    <input {...register('seniorSecondaryCert')} type="file" accept="image/*,application/pdf" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Graduation Certificate:</label>
    <input {...register('graduationCert')} type="file" accept="image/*,application/pdf" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Cancelled Cheque:</label>
    <input {...register('cancelledCheque')} type="file" accept="image/*,application/pdf" className="border p-2 w-full" />
  </div>

  <div>
    <label className="block">Latest Resume:</label>
    <input {...register('resume')} type="file" accept="application/pdf" className="border p-2 w-full" />
  </div>
</div>
{/* Bank Details */}
<h3 className="font-semibold">Bank Details</h3>
<div className="grid grid-cols-2 gap-4">
  <div>
    <input {...register('accountNumber', { required: true })} type="text" placeholder="Account Number" className="border rounded-lg border-blue-500 p-2 w-full" />
  </div>
  
  <div>
    <input {...register('accountHolderName', { required: true })} type="text" placeholder="Account Holder Name" className="border rounded-lg border-blue-500 p-2 w-full" />
  </div>

  <div>
    <input {...register('bankName', { required: true })} type="text" placeholder="Bank Name" className="border rounded-lg border-blue-500 p-2 w-full" />
  </div>

  <div>
    <input {...register('bankBranchName', { required: true })} type="text" placeholder="Bank Branch Name" className="border rounded-lg border-blue-500 p-2 w-full" />
  </div>

  <div className="col-span-2">
    <input {...register('ifsc', { required: true })} type="text" placeholder="IFSC Code" className="border rounded-lg border-blue-500 p-2 w-1/3" />
  </div>
</div>

        {/* Submit Button */}
        <div className='flex justify-end'>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>

        </div>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-6 p-4 border rounded">
          <h3 className="text-lg font-bold">Submitted Data</h3>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Mobile:</strong> {submittedData.mobile}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
          {submittedData.spouseName && <p><strong>Spouse Name:</strong> {submittedData.spouseName}</p>}
          <p><strong>Father's Name:</strong> {submittedData.fatherName}</p>
          <p><strong>Mother's Name:</strong> {submittedData.motherName}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Account Number:</strong> {submittedData.accountNumber}</p>
          <p><strong>Account Holder Name:</strong> {submittedData.accountHolderName}</p>
          <p><strong>Bank Name:</strong> {submittedData.bankName}</p>
          <p><strong>Bank Branch Name:</strong> {submittedData.bankBranchName}</p>
          <p><strong>IFSC Code:</strong> {submittedData.ifsc}</p>
          <h4 className="font-semibold mt-2">Uploaded Documents:</h4>
          <ul>
            {Object.entries(submittedData).map(([key, value]) =>
              key.includes('Photo') || key.includes('Cert') || key.includes('Cheque') || key.includes('resume') ? (
                <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value ? (value as FileList)[0]?.name : 'Not uploaded'}</li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
}