---
title: "Multisig 2FA bot (Beta)"
description: "![image.png](https://files.peakd.com/file/peakd-hive/stoodkev/23uFrzBuyyLBUMSrqxGjaMH7TVgwwmqyZxvtM7WqqCet3vv4aVPdDUfCXAMuWGvFgzAmb.png)  Our Multisig..."
author: "stoodkev"
permlink: "multisig-2fa-bot-beta"
category: "multisig"
created: "2024-10-15T10:54:30.000Z"
lastUpdate: "2024-10-15T10:59:09.000Z"
url: "/multisig/@stoodkev/multisig-2fa-bot-beta"
reputation: 71.82
imageUrl: "https://files.peakd.com/file/peakd-hive/stoodkev/23uFrzBuyyLBUMSrqxGjaMH7TVgwwmqyZxvtM7WqqCet3vv4aVPdDUfCXAMuWGvFgzAmb.png"
tags: ["multisig", "dev", "hivedev", "hive-multisig", "dhf"]
hbdPayout: "51.540 HBD"
votesCount: 506
commentsCount: 48
type: "reblogged"
---
![image.png](https://files.peakd.com/file/peakd-hive/stoodkev/23uFrzBuyyLBUMSrqxGjaMH7TVgwwmqyZxvtM7WqqCet3vv4aVPdDUfCXAMuWGvFgzAmb.png)

Our Multisig 2fa bot is now ready for Beta testing.
/!\ Always make sure you have your account's owner key available, to disable the 2FA if needed.

## How it works

To use 2FA by validating One-Time-Passwords (OTP), you give partial authority to a bot to sign for your account, and also keep partial authority over it. The bot will receive signature requests via Hive Multisig and will sign them when the OTP is correct, then broadcast the resulting transaction.
You can use the bot we provide or run your own.

## 2FA Setup


To set up 2FA, go to https://multisig.hive-keychain.com , login, then navigate to `2FA (Beta)`.

![Screenshot 2024-10-11 at 11.50.36.png](https://files.peakd.com/file/peakd-hive/stoodkev/EoAh3TUaLQQeyzNaDcbAfS8BsencCUrSEENxtNqNkmYcCogmAoeM9qrvrqn1XzdcTDk.png)

On the next screen, the One-Time-Password secret is generated. Scan the QR Code and verify the code to go to the next page.

![Screenshot 2024-10-11 at 11.51.58.png](https://files.peakd.com/file/peakd-hive/stoodkev/EonrnwUfR2hCFVYE93iTsjbKFrui1NFuJYfrSZ2vBTH1JiTLdwvD2bp1FSWDStNPBcq.png)

On the final setup page, you need to choose between the default configuration and a custom one. By default, the 2FA bot is @multisig-2fa (the account verifying the OTP and deciding whether to sign or not the transaction) and the weight and thresholds are automatically attributed. If you want to use your own bot instead or define different weights and threshold, use the custom tab. 

![Screenshot 2024-10-11 at 11.54.27.png](https://files.peakd.com/file/peakd-hive/stoodkev/Eo2BM1YUXvirxGYoRAdgSypAJUzZPMHZk1m9VjfUyZzr19PsJkmJP5zbYQ3VyJ5X4FB.png)

When you validate your 2FA setup, the secret is encrypted and sent to the bot, and it will be able to verify transactions in the future.


![Screenshot 2024-10-11 at 12.06.00.png](https://files.peakd.com/file/peakd-hive/stoodkev/Eos1io5fEy85v3VLhcsbU4L5sFe4Pzj3fdgRtSuByDryxAXSMm2c43rCwVkxXBSZvYR.png)

You can then move to the transactions tab and try a transfer, for instance, the multisig account is automatically detected as a 2FA bot and you will be asked for the OTP before broadcast. Note this tab is just for tests purposes, we will push a new version of Keychain in Beta shortly, that will automatically ask for OTPs on Keychain side, so it will be directly compatible with any frontend that works with Keychain.


## Using your own 2FA bot

You can also run your own 2FA bot to verify your OTPs. 
On your own server, clone [this opensource repository](https://github.com/hive-keychain/hive-multisig-2fa) and follow the README to properly set up the environment. 
We recommend creating a new account that will only be used for this purpose. This account's metadata will be automatically updated so that Hive Multisig, Keychain, and potentially other services recognize this account as a 2FA bot.

After setting up your server, go to the [Hive Multisig frontend](https://multisig.hive-keychain.com), and go through the process highlighted above. 

On the `Multisig 2FA Setup` page, make sure you use the `Custom` tab and enter your own bot account instead of the default @multisig-2fa.

## Enjoy! 

Looking forward to receiving your feedback and iterating with you guys on [our Discord server](https://discord.gg/DfCergfjaK).
Read about the @keychain integration [here](https://peakd.com/keychain/@keychain/hive-keychain-beta-v37-multisig-2fa-integration).