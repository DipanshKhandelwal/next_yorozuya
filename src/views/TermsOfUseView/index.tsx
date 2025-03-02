import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { HomeIcon, UserIcon } from "@heroicons/react/outline";
import orderBy from "lodash.orderby";

import { Loader, SelectAndConnectWalletButton } from "components";
import * as anchor from "@project-serum/anchor";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const TermsOfUseView: FC = ({}) => {
  return (
    <div className="container mx-auto max-w-6xl px-10">
      <p>
        Please read these terms of use ("terms of use", "agreement") carefully
        before using [website] website (“website”, "service") operated by [name]
        ("us", 'we", "our").
      </p>
      <br />
      <Stack spacing={2}>
        <p>
          <b>Conditions of use</b>
          <br />
          By using this website, you certify that you have read and reviewed
          this Agreement and that you agree to comply with its terms. If you do
          not want to be bound by the terms of this Agreement, you are advised
          to leave the website accordingly. [name] only grants use and access of
          this website, its products, and its services to those who have
          accepted its terms.
        </p>

        <p>
          <b>Privacy policy</b>
          <br />
          Before you continue using our website, we advise you to read our
          privacy policy [link to privacy policy] regarding our user data
          collection. It will help you better understand our practices.
        </p>

        <p>
          <b>Age restriction</b>
          <br />
          Age restriction You must be at least 18 (eighteen) years of age before
          you can use this website. By using this website, you warrant that you
          are at least 18 years of age and you may legally adhere to this
          Agreement. [name] assumes no responsibility for liabilities related to
          age misrepresentation.
        </p>

        <p>
          <b>Intellectual property</b>
          <br />
          You agree that all materials, products, and services provided on this
          website are the property of [name], its affiliates, directors,
          officers, employees, agents, suppliers, or licensors including all
          copyrights, trade secrets, trademarks, patents, and other intellectual
          property. You also agree that you will not reproduce or redistribute
          the [name]’s intellectual property in any way, including electronic,
          digital, or new trademark registrations. You grant [name] a
          royalty-free and non-exclusive license to display, use, copy,
          transmit, and broadcast the content you upload and publish. For issues
          regarding intellectual property claims, you should contact the company
          in order to come to an agreement.
        </p>

        <p>
          <b>ser accounts</b>
          <br />
          As a user of this website, you may be asked to register with us and
          provide private information. You are responsible for ensuring the
          accuracy of this information, and you are responsible for maintaining
          the safety and security of your identifying information. You are also
          responsible for all activities that occur under your account or
          password. If you think there are any possible issues regarding the
          security of your account on the website, inform us immediately so we
          may address it accordingly. We reserve all rights to terminate
          accounts, edit or remove content and cancel orders in their sole
          discretion.
        </p>

        <p>
          <b>Applicable law</b>
          <br />
          By visiting this website, you agree that the laws of the [location],
          without regard to principles of conflict laws, will govern these terms
          and conditions, or any dispute of any sort that might come between
          [name] and you, or its business partners and associates.
        </p>

        <p>
          <b>Disputes</b>
          <br />
          Any dispute related in any way to your visit to this website or to
          products you purchase from us shall be arbitrated by state or federal
          court [location] and you consent to exclusive jurisdiction and venue
          of such courts.
        </p>

        <p>
          <b>Indemnification</b>
          <br />
          You agree to indemnify [name] and its affiliates and hold [name]
          harmless against legal claims and demands that may arise from your use
          or misuse of our services. We reserve the right to select our own
          legal counsel. Limitation on liability [name] is not liable for any
          damages that may occur to you as a result of your misuse of our
          website. [name] reserves the right to edit, modify, and change this
          Agreement any time. We shall let our users know of these changes
          through electronic mail. This Agreement is an understanding between
          [name] and the user, and this supersedes and replaces all prior
          agreements regarding the use of this website.
        </p>
      </Stack>
    </div>
  );
};
