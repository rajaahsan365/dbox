import { fetchBoxDetails } from "@/actions/box-action";
import BoxTableView from "@/components/box/box-table-view";
import PageHeading from "@/components/page-heading";
import Link from "next/link";
import React from "react";
import { LuPlus } from "react-icons/lu";

async function DonationBox() {
  const boxlists = await fetchBoxDetails();
  const data = boxlists?.results?.[0]?.user;
  console.log("🚀 ~ DonationBox ~ data:", data);
  return (
    <>
      <div className="flex justify-between items-center">
        <PageHeading title={"Donation Box List"} />
        <Link
          href="/boxes/add"
          className="bg-green-600 text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-green-700"
        >
          <LuPlus size={15} className="mr-2" /> Add New Box
        </Link>
      </div>

      <BoxTableView data={boxlists} />
    </>
  );
}

export default DonationBox;
