---
title: "Introducing CommentRewarder - A new service to reward comments"
description: "How to use CommentRewarder and how it works. "
author: "commentrewarder"
permlink: "introducing-commentrewarder-a-new-service-to-reward-comments"
category: "hive"
created: "2024-09-23T19:30:30.000Z"
lastUpdate: "2024-10-01T18:57:06.000Z"
url: "/hive/@commentrewarder/introducing-commentrewarder-a-new-service-to-reward-comments"
reputation: 66.42
imageUrl: "https://files.peakd.com/file/peakd-hive/commentrewarder/Eo4Js72AzQQCr57qWdZ7x1b8NEaahQfKE9AKBdT3EJZMjzDF1TD174TZubiv9EcBRCf.png"
tags: ["hive", "tools", "engagement", "rewards"]
hbdPayout: "69.516 HBD"
votesCount: 977
commentsCount: 247
type: "reblogged"
---

## What is CommentRewarder

Comment Rewarder (CR) is a bot that rewards comments. CR helps low-stake authors (and all authors) reward their audience. Not all blog authors have enough Hive Power to upvote replies to reach the dust threshold, and rewarding comments incentivizes engagement. Authors with lower Hive Power may not have a weighty enough vote to successfully reward replies to their posts because of the ~$0.02 “dust” threshold. CR solves this problem.

You may have seen this idea talked about by @acidyo in recent blog posts [[1]](https://peakd.com/@acidyo/commentrewarder) [[2]](https://peakd.com/comment/@acidyo/comment-rewarding-idea). It's up and running now! @Acidyo and @hivetrending collaborated to make it happen.

## How to use CommentRewarder in 2 simple steps
1. Before publishing your post, set the options for beneficiaries. Add @commentrewarder to the beneficiary list, and choose 3% or more.
2. Upvote replies to your post with any vote weight. 

---
###### This is how the Beneficiaries settings look in PeakD
![image.png](https://files.peakd.com/file/peakd-hive/commentrewarder/Eo4Js72AzQQCr57qWdZ7x1b8NEaahQfKE9AKBdT3EJZMjzDF1TD174TZubiv9EcBRCf.png)



---

## How CommentRewarder works

When the post is approximately **three days old**, CR takes inventory of the post's discussion thread. Replies upvoted by the OP are eligible for extra rewards. This way, you, the OP, choose which comments get rewarded, and you can skip spammy comments if needed.

When the post is **seven days old**, and author rewards are paid out, CR distributes its share of the author rewards to the accounts that authored the eligible comments in the discussion thread.

## Notes and Caveats - Q & A

* Replies downvoted by the author will not be eligible for rewards from CR. 
* Replies added/upvoted after the 3-day mark will not be eligible for rewards.
* Deeply nested replies **are** included in the process, in addition to replies directly under the post.
* One commenter can receive more rewards by authoring multiple approved comments.
* It’s possible that the CR share of author rewards plus the number of approved comments results in amounts smaller than the minimum transfer amount — 0.001 Hive/HBD. Those minuscule value transfers will be skipped.
* ~~The rewards are shared equally among eligible comments, and the comment upvote value doesn't matter currently.~~
* The rewards are split between eligible comments, based on the weight of the OP's upvotes.
* Votes' rshares value is used to calculate the reward distribution. A change of HivePower (including delegations) during the three days while comments are being voted on can skew the reward distribution.
* A higher beneficiary percentage will increase rewards for the comments, since more funds will be available to CR.
* 

Q: Are both HIVE and HBD coins sent for rewards?
A: Both liquid Hive and HBD will be sent. Because author rewards come in as HivePower and HBD, we’ll provide some liquid Hive initially to get things going.

Q: What if reply to myself and upvote my reply?
A: Rewards for self-replies will be burned (sent to null).

Q: How are Layer-2 token rewards (Hive-Engine) distributed?
A: Layer-2 token rewards aren't currently being shared with the comment authors. This may change in a future update.

Q: Can an icon be displayed on posts that have CR enabled, to differentiate them from other posts in feeds?
A: The latest PeakD version shows a unique icon for posts that have CR enabled 

Q: What happens to the funds if the blog post author does not upvote any comments?
A: The Hive and HBD will be refunded to the OP

Q: If a post is set to 100% power up, are the comment rewards also sent as HP?
A: Currently, liquid Hive is sent equivalent to the amount of HP that pays out.
---

What do you think? Feedback is welcome.

---

![commentrewarder.png](https://files.peakd.com/file/peakd-hive/commentrewarder/AJpnnkNxxf1wwShBNA3Sgdao3gP4PHNBqp72Mu5D1qhLCTz4YpcPMycBRjdzXDE.png)
*image generated using venice.ai*

---

Thanks for reading this far. Guess what! CommentRewarder is enabled for this post, and we will upvote some replies here. Let us know what you think!

