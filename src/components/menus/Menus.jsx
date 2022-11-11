import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Avatar from '@mui/material/Avatar';
import { Link, NavLink} from 'react-router-dom';
import ABDivider from '../ABDivider';
import { useStateContext } from '../../contexts/ContextProvider';
import {ABIcon} from '../icons/ABIcon'

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    flexDirection: 'row-reverse',
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    //borderBottomRightRadius: theme.spacing(2),
    padding: theme.spacing(1,1.5),
    //paddingRight: theme.spacing(2),   
    margin:  theme.spacing(0.5, 0),
    marginRight: theme.spacing(1),
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
      alignItems: 'center',
    },
  },
  [`& .${treeItemClasses.group}`]: {
     marginLeft: theme.spacing(0),
    [`& .${treeItemClasses.content}`]: {
       paddingLeft: theme.spacing(1.5),
    },
  },
}));

function TypographyWrapper(props) {
    const { activeMenu } = useStateContext();  
    
    const Wrapper = styled(Typography)(({ theme }) => ({
        ...{
            textOverflow: activeMenu?"":"ellipsis",
            whiteSpace: "nowrap",
            textTransform: 'capitalize',
            // overflow: "hidden",
            maxWidth: activeMenu?theme.spacing(14):theme.spacing(10),
            display:'block',
        }
    }));

    return (
        <Wrapper {...props}/>
    );
  }

function StyledTreeItem(props) {
  const { activeMenu,currentColor } = useStateContext();  
  const {
    bgColor,
    color,
    labelIcon,
    // labelIcon: LabelIcon,
    labelInfo,
    labelText,
    link,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot       
      label={
        <NavLink to={link}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0, pl:1.5 }}>
            {labelIcon}
            <Fade 
                  sx={{m:0,p:0,display: 'flex',width: '100%'}}
                  in={activeMenu}>
                  <Box>
                      <TypographyWrapper variant="body1" sx={{  flexGrow: 1 ,ml:1}} >    
                          {labelText}      
                      </TypographyWrapper>
                  </Box>
            </Fade>      
            <TypographyWrapper variant="caption" color="inherit">
              {labelInfo}
            </TypographyWrapper>
          </Box>
        </NavLink>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': currentColor,
      }}
      {...other}
    />
  );
}

function SubMenuItemWrapper (props){
    const{menus, parentId} = props;
    return(        
        <Box>
          {menus.map((item, index) => (                           
                    <StyledTreeItem 
                      nodeId={item.nodeid} 
                      key={`${parentId}_${index}`} 
                      link={item.link}
                      labelText={item.name} 
                      labelIcon={
                        (typeof item.avatar !== 'undefined')? 
                        <Avatar src={item.avatar}  sx={{ml:-1}} />
                        :
                        (item.icon?<ABIcon                                                     
                          iconName={item.icon} 
                          fontSize={'medium' }/>                                                  
                          : <TypographyWrapper variant='body1' sx={{ pl:1, pr:1.1}}>{item.name.substring(0,1).toUpperCase()}</TypographyWrapper>)
                        } >                                          
                            
                        {typeof item.links !== 'undefined' 
                          && <SubMenuItemWrapper 
                          menus={item.links} 
                          parentId={`${parentId}_${index}`}/>}
                    </StyledTreeItem>  
            ))}
        </Box>
    );
}

function MenuItemWrapper (props){
    const{menus, parentId} = props;
    return(        
        <Box>
            {menus.map((item, index, row) => (
              <Box key={`${parentId}_${index}`}>                
                {(typeof item.title !== 'undefined' && 
                    <TypographyWrapper variant='caption' 
                        sx={{pl:2,mt:2,mb:1,ml:1}}>{item.title}</TypographyWrapper>                    
                    )
                }                
                
                {typeof item.links !== 'undefined' && 
                    <SubMenuItemWrapper menus={item.links} parentId={`${parentId}_${index}`}/>
                }       
                {index +1 !==row.length &&<ABDivider />}
              </Box>   
            ))}
        </Box>
    );
}



StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.node,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default function  Menus(props){
    const {menus} = props;
    const [expanded, setExpanded] = React.useState(['1','1_1','1_1_1']);
    const [selected, setSelected] = React.useState(['1_1_1']);
    
    const handleToggle = (event, nodeIds) => {
      setExpanded(nodeIds);
    };
  
    const handleSelect = (event, nodeIds) => {
      setSelected(nodeIds);
    };

  return (
      <TreeView
        aria-label="controlled"
        expanded={expanded}
        selected={selected}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 0 }} />}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        sx={{  flexGrow: 1, maxWidth: 249,  pr:1,pl:1}} //overflowY: 'auto',
      >      
        
            <MenuItemWrapper menus={menus} parentId='menu_'/>      
      </TreeView>
  );
}
