---
title: "Hive Tokenomics Improvement Proposal for the Next HardFork"
description: "This is an outline of the needed Hive tokenomics improvement for the next HardFork that should happen somewhere in Q1 2025.  As many of you know I hav..."
author: "dalz"
permlink: "hive-tokenomics-improvement-proposal-for-the-next-hardfork"
category: "hive-139531"
created: "2024-11-27T19:01:00.000Z"
lastUpdate: "2024-11-27T19:01:00.000Z"
url: "/hive-139531/@dalz/hive-tokenomics-improvement-proposal-for-the-next-hardfork"
reputation: 80.57
imageUrl: "https://files.peakd.com/file/peakd-hive/dalz/23tkhkyM3rj77nsvTJSxrVKZtmqGUMDwFdkGZDij5GEhDyMnogLK7YSNVUUayKeUUbqBD.jpg"
tags: ["hive", "tokenomics", "inflation"]
hbdPayout: "47.316 HBD"
votesCount: 839
commentsCount: 49
type: "reblogged"
---
This is an outline of the needed Hive tokenomics improvement for the next HardFork that should happen somewhere in Q1 2025.

As many of you know I have been griding data about Hive for a while now on this chain and I have been digging a lot of the many aspects that the Hive ecosystem and tokenomics have. 

The Hive tokenomics are by no means simple. In fact, I would go and say that they are probably one of the most complicated in the crypto industry. The Layer 1 dual currency model is imposing this complexity.

The proposed improvements here are not coming only from me, but they have a wider user feedback, from my communication on chain and off chain, mainly on discord with other Hive users. 
For some of the proposed improvements there is already awareness in the Hive dev community and other members of the Hive community have probably seen them and come to the conclusions by them self. 
Point been is this is not in any way my personal conclusion and proposal that I want to take ownership of, it’s something that has been talking about from many users, devs and non devs in the community for a long time. There might be people already coding this stuff, that I’m not aware off. 





![01.jpg](https://files.peakd.com/file/peakd-hive/dalz/23tkhkyM3rj77nsvTJSxrVKZtmqGUMDwFdkGZDij5GEhDyMnogLK7YSNVUUayKeUUbqBD.jpg)




I’m just putting this post out to increase even more awareness and to push even more that these points are been given attention to and covered for sure in the next HardFork as I believe they will improve the Hive tokenomics and make sure this community is around for years to come. 

# 1. Hive Inflation Base

The way new Hive is put in circulation is by calculating the quantity from the current virtual hive supply and multiplied by the current inflation rate.
As many of you know the inflation rate is set to go down by roughly 0.5% per year and should stop at 0.95% per year somewhere in 2036 or at block 220,750,000. We are currently at around 6% inflation, initially it was 9.5% when these mechanics were put in place.

The inflation rate itself is not an issue. What is an issue is the inflation base or the hive supply that is multiplied with the inflation rate.

The formula for the new Hive is as follows:
> auto new_hive = ( props.virtual_supply.amount * current_inflation_rate ) / ( int64_t( HIVE_100_PERCENT ) * int64_t( HIVE_BLOCKS_PER_YEAR ) );

The link for the repo where this is defined:
https://gitlab.syncad.com/hive/hive/-/blob/master/libraries/chain/database.cpp#L6404

As we can see the inflation base is set as the virtual hive supply, that includes the HBD supply converted to HIVE at the feed hive price (3.5 median hive price). 
Currently we have: 
-	460M HIVE 
-	33.5 HBD 
-	0.275 hive feed price 
-	582M VIRTUAL HIVE SUPPLY

The base for the inflation is not 460M, but 582M, or 27% higher inflation base, meaning 27% more hive put in circulation. Furthermore, the HBD that is used to calculate the virtual hive supply includes the HBD in the DHF, that is close to 23M HBD, while the freely circulating HBD is 10.6M HBD. For example, the debt calculation takes only the 10.6M HBD.

The effects on the newly issued hive from the changing inflation base can been seen from the chart. 
 


![image.png](https://files.peakd.com/file/peakd-hive/dalz/23xV8qTrbqZ3HJGiczkcntistHRvUjoAfPvw3GYSqwrKMUbeXtMyRWdHyGNsgKN9a629e.png)






We can see that back in 2020 the new daily hive that was put in circulation was around 60k, while we are now at 80k hive daily. This hive is the regular inflation so to speak, excluding the hive created from HBD to HIVE conversions. 

**In a meanwhile the inflation rate went down from 8% to 6%, but hive created went up from 60k to 80k because of the hive inflation base and the increase in the virtual hive supply.** 
Whenever the hive price drops the virtual hive supply goes up putting more hive in circulation. 
Another big disadvantage of using the virtual hive supply is the inability to calculate and predict the future hive inflation because the inflation base through HBD is dependent on the hive price, that by itself can not be predicted. 

> ### **Proposal: Change the inflation base from virtual hive supply to regular hive supply.** 

What this means is instead of the currently 582M virtual hive supply, use 460M regular hive supply. Note that these numbers are dynamic and will change, for any future references. 

# 2. Debt Calculations

The way the debt is calculated is using the available HBD supply, currently around 10.6M HBD, excluding the HBD in the DHF around 23M HBD. For the hive market cap, the hive supply that is used is the virtual hive supply and the hive feed price (3.5 median hive price).

>	Hive_debt = available_hbd / hive_market_cap

The way this is setup is basically to give the lowest debt possible, enabling more HBD to be created before the haircut rule kicks in. Furthermore, by using the virtual hive supply, the HBD is treated as both asset and a liability. It is used in both the debt and the market cap. You cant take more debt by putting debt itself as collateral. 

The way this should be is again to use only the regular hive supply to calculate the market cap for the debt. If the change is made to the inflation base, this should follow as well. This will slightly increase the debt, but not by a lot, for example under current conditions, the debt will go from 6.7% to 8.5%, or an increase of 1.8%. 


> ### **Proposal: Use regular hive supply for the market cap when calculating the debt instead the virtual hive supply.** 


# 3. HBD in the Decentralized Hive Fund DHF

The amount of HBD in the DHF is now close to 23M HBD, while the market cap for hive if we use the regular hive supply is 125M. Furthermore, there is 39M HIVE in the DHF, remains from the initially 83M HIVE that were transferred from Steemit Inc during the Hive HardFork. These 39M HIVE is being slowly converted to HBD at a rate of 0.05% per day. This HIVE adds another 10M HBD to the 23M HBD, under current conditions. 

A total of 33M HBD in the DHF to 125M hive market cap, that is more than 26% share. This is a big share of the tokens controlled by the DHF. Imagine an entity controlling 26% of the BTC supply. For example Saylor is now close to 2%, while Blackrock is just above 1%. 
As example the share of the regular inflation that goes to the DHF is set to be at 10%. Some variation from these 10%, for example 5% more or less is not an issue but the current share is too much. 

What has been the consequences of this is that in the last two years, 2023 and 2024 the Hive ecosystem has overspent on DHF projects, roughly 3M per year, while the regular hive inflation to the DHF has been at 1M per year. This has caused additional inflation in the hive economy putting more hive into circulation and slightly diluting the value of the existing hive stakeholders. 
Additionally the other sources for HBD in 2024 have been much less than the DHF. Author rewards for example are under 1M, while interest is at 1.2M HBD.

While having funds for development is a 100% a must, and 3M USD per year is a small number when compared to some of the bigger projects, they need to be in line with the size of the project, and currently they simply are not. If the projects that are funded deliver growth in the future, they might all be worth it but that is all **uncertain**.  

In order to put the spending in correlation with the size of the Hive ecosystem a share of the tokens in the DHF needs to be burned. There are many ways how to go around this, and I’m not proposing a final solution, but one of the ways to do it, without causing instant shock to the economy is to put some of the funds in slow burn mode, similar how it was done for the conversions of HIVE to HBD. For example, the remaining HIVE of 39M can be but in slow burn mode at the same rate as now of 0.05%, or some absolute daily number and be burned in the next three to five years.

Additionally, we can simply put burn proposals to burn X amount of HBD from the DHF for years to come. For example, 10k HBD per day will burn around 10M HBD in the following three years. 
The end goal of reduction of the token share in the DHF would be to bring it close to around 10% of the hive market cap. 

> ### **Proposal: Put the remaining HIVE supply in the DHF in a slow burn mode.** 
Depending on the Hive market cap in the future, additionally burn some HBD from the DHF via proposals.

Some might say that this will reduce the development funds and have negative impact, but I don’t see it a reductions in dev funds, but **bringing dev funds in correlation with the project valuation.** 

The regular hive inflation will still continue to the DHF, and if the price of hive appreciate, say $3, or $10, the there will be much more funds then 3M per year, but they will be in correlation with the project valuation. 


----


# Final Remarks

I know some of the topics above might be controversial, especially when it comes to the DHF funds. For the first two points I don’t see any issues to be implanted, except maybe from dev time and operational issues, but the changes by them self-do not require a lot of dev work imo. 

The main goal of all of the proposals above is to strengthen the Hive tokenomics and economy. All the proposals are in this direction. 
I do not want to cause any fears, but theoretically the way the Hive tokenomics are currently set there is a possibility for a *semi-death spiral*. The total collapse like Terra/Luna and UST is not possible, but I can see a possibility for the Hive supply going more than 3x in short period of time with an end result hive being worth much less and HBD devalued by a lot. 

Some can say that these are bear market issues, and higher hive price will fix them all, but this is only masking the issue. The cycle will come back and maybe with even higher stakes. Imagen instead of 10M HBD, there is 100M HBD in circulation, or even one billion HBD, and then we have a semi-death spiral scenario. The sooner we strengthen our tokenomics and while in a low market cap the better. 

All the best
@dalz