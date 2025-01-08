import { Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import ServiceImageGrid from './ServicesGrid'
import ImagePic from '../../public/treecuttingone.jpg'
import TreeCuttingImage from '../../public/treecuttingman.jpg'
import TreePruningImage from '../../public/treepruningservice.jpg'
import TreeTrimmingImage from '../../public/treetrimmingservice.jpg'
import TreeRemovalImage from "../../public/treeremoval.jpg"
import YardCleanupImage from '../../public/yardcleanupservice.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import ServiceCard from './ServiceCard'
import { FcMindMap } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import { FcFeedIn } from "react-icons/fc";

import TreePrunningIcon from  '../../public/services/treeprunning.png'
import TreeCuttingIcon from  '../../public/services/treecuttingtwo.png'
import TreeRemovingIcon from  '../../public/services/treeremoving.png'
import TreeTrimmingIcon from  '../../public/services/treetrimming.png'
import YardCleaningIcon from  '../../public/services/sweeping.png'
import Link from 'next/link'

export default function Services() {

    const images = [
        { src: TreeCuttingImage, title: "Tree Cutting" },
        { src: TreePruningImage, title: "Tree Pruning" },
        { src: TreeTrimmingImage, title: "Tree Trimming" },
        { src: TreeRemovalImage, title: "Tree Removal" },
        { src: YardCleanupImage, title: "Yard Cleanup" },
      ];

const icons = [
    { src: TreeCuttingIcon, title: "Tree Cutting" },
    { src: TreePrunningIcon, title: "Tree Pruning" },
    { src: TreeTrimmingIcon, title: "Tree Trimming" },
    { src: TreeRemovingIcon, title: "Tree Removal" },
    { src: YardCleaningIcon, title: "Yard Cleanup" },
]

  return (
    <Card
        variant='outlined'
        sx={{
            width: '100%',
            backgroundColor: '#f5f5f5',
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            p: 3,
        }}
    >

        <Stack
            alignItems={'center'}
        >
            <Typography
               variant="h4" color={"text.primary"} fontWeight={900}
            >
                Our Services
            </Typography>
            <Typography
                variant='body1'
                fontWeight={500}
                color={'text.secondary'}
                textAlign={'center'}
            >
            Our experienced team is committed to ensuring the health, safety, and beauty of your trees and landscape.
            </Typography>
        </Stack>

            <ServiceCard images={icons} />
            <Button
                variant='contained'
                sx={{
                    width: 200,
                    height: 50,
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                    mt: 3
                }}
                endIcon={<MdOutlineArrowOutward />}
                LinkComponent={Link}
                href='/services'
            >
                More Services Info
            </Button>

    </Card>
  )
}
