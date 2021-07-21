import { Module } from '@nestjs/common';
import { CampaignsResolver } from '@src/campaigns/campaigns.resolver';

@Module({
  providers: [CampaignsResolver]
})
export class CampaignsModule {}
